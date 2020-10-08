import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import User from './User'

const Users = ({ users }) => {
    return (
        <Container>
            <h3 className="mt-4 mt-md-5 mb-4 sm:text-center">All Users</h3>
            <Row className="px-3">
                {users.map(user => <User user={user} />)}
            </Row>
        </Container>
    )
}

export default Users
