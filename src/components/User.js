import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import avatar from "../assets/avatar.png";

const User = () => {
    return (
        <Col className="col-md-4 col-lg-3">
            <Card border="primary mb-4" style={{ minWidth: '10rem' }}>
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example .
                    </Card.Text>
                    <Button variant="primary" className="w-100 mb-3">Update</Button>
                    <Button variant="danger" className="w-100">Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default User
