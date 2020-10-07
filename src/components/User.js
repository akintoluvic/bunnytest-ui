import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import avatar from "../assets/avatar.png";

const User = () => {
    return (
        <Col className="md:w-full col-lg-3">
            <Card border="primary mb-4 border" style={{ minWidth: '14rem' }}>
                <Card.Img className="rounded-circle p-4" variant="top" src={avatar} />
                <Card.Body className="text-center mt-n4">
                    <Card.Title>Randy Author</Card.Title>
                    <Card.Text>
                        Some quick example.
                    </Card.Text>
                    <Button variant="primary" className="w-75 mb-3">Update</Button>
                    <Button variant="danger" className="w-75">Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default User
