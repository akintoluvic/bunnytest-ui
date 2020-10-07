import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import User from './User'

const Users = () => {
    return (
        <>
            <div>Users</div>
        <Row className="flex flex-col md:flex-row md:row-wrap col-md-12">
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
