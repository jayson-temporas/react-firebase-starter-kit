import { useRef, useState, useEffect} from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import Main from '../layouts/Main'
import List from '../components/List'
import { useAuth } from "../contexts/AuthContext"

function Login() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const { currentUser, login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current?.value, passwordRef.current?.value)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            if (e && e.message) {
                setError(e.message)
            }
        }
    }

    useEffect(() => {
        if (currentUser && currentUser.claims.admin) {
            window.location.href = "/admin";
        } else if (currentUser && currentUser.claims.client) {
            window.location.href = "/client";
        }
    }, [currentUser]);

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Login Page</title>
            <meta name="description" content="Login to your account"></meta>
        </Helmet>
        <Main bg="dark">
            <div className="">
                <div className="container mt-5">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7 mt-3 order-md-1 order-12">
                            <List 
                                title="Sign in to access your account"
                                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id efficitur ex. Duis rutrum elementum nisi quis posuere."
                                items={[
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id efficitur ex. Duis rutrum elementum nisi quis posuere.",
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id efficitur ex. Duis rutrum elementum nisi quis posuere."
                                    ]}
                            />
                        </div>
                        <div className="col-md-5 mb-5 order-1">
                            <Card>
                                <Card.Body>
                                    <h2 data-testid="header" className="text-center mb-4">Login To Your Account</h2>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group id="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" ref={emailRef} required />
                                        </Form.Group>
                                        <Form.Group id="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" ref={passwordRef} required />
                                        </Form.Group>
                                        <Button disabled={loading} className="w-100 mt-3" type="submit">
                                            Log In
                                        </Button>
                                    </Form>
                                    <div className="w-100 text-center mt-3">
                                        <Link to="/forgot-password">Forgot Password?</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <div className="w-100 text-center mt-2">
                                Need an account? <Link to="/signup">Sign Up</Link>
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

export default Login;
