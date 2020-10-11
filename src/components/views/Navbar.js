import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap'


const TopNav = ({text, children, handleShow}) => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Bunny Tasks</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Button variant="light" onClick={handleShow}>{text}</Button>
                    </Nav>
                    {children}
            </Container>
        </Navbar>
    )
}

export default TopNav
