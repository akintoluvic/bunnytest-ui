import React, { useState } from 'react'
import { useQueryCache } from "react-query";
import useUsers from "../hooks/useUsers";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Navbar from './Navbar'
import User from './User'
import CreateUser from './CreateUser'

const Users = ({ users }) => {
    const cache = useQueryCache();
    const { status, data, error, isFetching } = useUsers();

    console.log(data)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Navbar text="Create User" handleShow={handleShow} >
                <CreateUser show={show} handleClose={handleClose} />
            </Navbar>
            <Container>
                <h3 className="mt-4 mt-md-5 mb-4 sm:text-center">All Users</h3>
                <Row className="px-3">
                    {users.map(user => <User user={user} />)}
                </Row>
            </Container>
        </>
    )
}

export default Users
