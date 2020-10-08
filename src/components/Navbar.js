import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap'
import CreateUser from './CreateUser'


const TopNav = ({text}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Bunny Tasks</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Button variant="" className="btn-light" onClick={handleShow}>{text}</Button>
                    </Nav>
                    <CreateUser handleClose={handleClose} show={show} />
            </Container>
        </Navbar>
    )
}

export default TopNav
