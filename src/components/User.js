import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import avatar from "../assets/avatar.png";

const User = ({user}) => {

    return (

        <Row className="w-100 px-3 pb-1 pt-3 mb-2 bg-white mx-auto d-flex flex-row align-items-center justify-content-between">
            <span className="d-flex">
            <img className="rounded-circle mr-2" variant="top" height="25" src={avatar} alt="user avatar" />
            <Card.Title>{user.name}</Card.Title>
            </span>
            
            <span className="">
                <LinkContainer to={`users/${user._id}`}>
                    <Button variant="primary" className="btn-sm">View</Button>
                </LinkContainer>
                <Button variant="warning" className="btn-sm mx-2">Edit</Button>
                <Button variant="danger" className="btn-sm">Delete</Button>
            </span>
        </Row>
    )
}

export default User
