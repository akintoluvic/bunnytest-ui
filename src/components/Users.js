import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import User from './User'
import CreateUser from './CreateUser'

const Users = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <Row className="mt-5 mb-4 flex flex-wrap justify-content-between align-items-center">
                <h3>All Users</h3>
                <Button variant="primary" className="" onClick={handleShow}>Create User</Button>
                <CreateUser handleClose={handleClose} show={show} />
            </Row>
            <Row className="">
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </Row>
        </Container>
    )
}

export default Users
