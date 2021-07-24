import { useAuth } from "../contexts/AuthContext"
import { useState, useEffect } from 'react';
import { Navbar, Nav } from "react-bootstrap"
import * as React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ({ bg }) => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const usersReducer = useSelector((state) => state.users)

    async function handleLogout() {
        setError("")

        try {
            await logout()
            window.location.reload();
        } catch {
            setError("Failed to log out")
            console.log(error)
        }
    }

    return (
        <>
            <Navbar id='main-navbar' bg={bg ? bg : 'dark'} fixed="top" className="px-2">
                <Navbar.Brand className="text-white navbar-brand" as={Link} to="/"> React Starter Kit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        { ! currentUser ? 
                        <>
                            <Nav.Link className="text-white"  as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link className="text-white"  as={Link} to="/signup">Sign Up</Nav.Link>
                        </> 
                        :
                        <>
                            <Nav.Link className="text-white" >Welcome { usersReducer.user.firstName }</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to={ currentUser.claims.admin ? '/admin' : '/client' }>{ currentUser.claims.admin ? 'Admin' : 'Client' } Page</Nav.Link>
                            <Nav.Link className="text-white" onClick={handleLogout}>Log Out</Nav.Link>
                        </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
