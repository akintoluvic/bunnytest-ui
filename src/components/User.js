import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import avatar from "../assets/avatar.png";

const User = () => {
    return (
        <Col className="md:w-full col-lg-3">
            <Card border="0 mb-4" style={{ minWidth: '14rem' }}>
                <Card.Img className="rounded-circle p-4" variant="top" src={avatar} />
                <Card.Body className="text-center mt-n4">
                    <Card.Title>Randy Author</Card.Title>
                    <Button variant="danger" className="">View</Button>
                    <Button variant="primary" className="mx-2">Edit</Button>
                    <Button variant="danger" className="">Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default User
