import { useRef, useState} from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import Main from '../layouts/Main'
import List from '../components/List'
import { useAuth } from "../contexts/AuthContext"
import { db, functions } from "../firebase"

function SignUp() {
    const emailRef = useRef("")
    const firstNameRef = useRef("")
    const lastNameRef = useRef("")
    const passwordRef = useRef("")
    const passwordConfirmRef = useRef("")

    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        if (!lastNameRef.current.value || !firstNameRef.current.value) {
            return setError("Please enter name")
        }

        try {
            setError("")
            setLoading(true)

            var cred = await signup(emailRef.current.value, passwordRef.current.value);
            await db.collection('users').doc(cred.user.uid).set({
                type: 1, // client type
                lastName: lastNameRef.current.value,
                firstName: firstNameRef.current.value// client type
            }).catch(err => {
                console.log(err)
            });
            
            const addClientRole = functions.httpsCallable('addClientRole')
            
            addClientRole({ email: cred.user.email }).then((result) => {
                setLoading(false)
                window.location.href = "/client";
            });
           

        } catch (e) {
            console.log(e)
            setLoading(false)
            if (e && e.message) {
                setError(e.message)  
            }
        }
    }

    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>Sign Up page</title>
            </Helmet>
            <Main bg="dark">
            <div className="">
                <div className="container mt-5">
                    <div className="row justify-content-md-center">
                    <div className="col-md-7 order-md-1 order-12 mt-3">
                        <List 
                            title="Register to get exclusive access"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id efficitur ex. Duis rutrum elementum nisi quis posuere."
                            items={[
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id efficitur ex. Duis rutrum elementum nisi quis posuere.",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id efficitur ex. Duis rutrum elementum nisi quis posuere."
                        ]}
                        />
                    </div>
                    <div className="col-md-5 order-1 mb-5">
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit} novalidate>
                                <Form.Group id="firstname">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text" ref={firstNameRef} required />
                                </Form.Group>
                                <Form.Group id="lastname">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" ref={lastNameRef} required />
                                </Form.Group>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-3" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </Main>
        </HelmetProvider>
    </>
    );
}

export default SignUp;
