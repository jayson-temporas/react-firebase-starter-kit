import * as React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <footer className="py-5">
            <Container>
                <Row>
                    <Col md>
                        <p>React Firebase Starter Kit</p>
                        <small className="d-block mb-3 text-white">&copy; 2021</small>
                    </Col>
                    <Col md sm={6} xs={6}>
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className="text-white" to="/">Cool stuff</Link></li>
                            <li><Link className="text-white" to="/">Random feature</Link></li>
                            <li><Link className="text-white" to="/">Team feature</Link></li>
                            <li><Link className="text-white" to="/">Stuff for developers</Link></li>
                            <li><Link className="text-white" to="/">Another one</Link></li>
                            <li><Link className="text-white" to="/">Last time</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            </footer>
        </div>
    );
}

export default Footer;
