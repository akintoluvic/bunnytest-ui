import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import avatar from "../assets/avatar.png";

const User = () => {
    return (
        <Col className="md:w-full col-lg-3">
            <Card border="0 mb-4 rounded-lg" style={{ minWidth: '14rem' }}>
                <Card.Img className="rounded-circle p-4" variant="top" src={avatar} />
                <Card.Body className="text-center mt-n4">
                    <Card.Title>Randy Author</Card.Title>
                    <Button variant="primary" className="btn-sm">View</Button>
                    <Button variant="" className="text-primary mx-2">Edit</Button>
                    <Button variant="" className="text-danger">Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default User
