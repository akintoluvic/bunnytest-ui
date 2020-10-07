import React from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import User from './User'

const Users = () => {
    return (
        <>
            <Row className="mt-5 mb-4 flex flex-row flex-wrap justify-content-between align-items-center">
                <h3>All Users</h3>
                <Button variant="primary" className="">Create User</Button>
            </Row>
            <Row className="flex flex-row flex-wrap">
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                
            </Row>
            
        </>
    )
}

export default Users
