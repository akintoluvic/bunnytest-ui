import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Task = () => {
    return (
        <Col className="w-full col-lg-3">
            <Card border="primary mb-4" style={{ minWidth: '12rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Task
