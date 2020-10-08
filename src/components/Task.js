import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Task = () => {
    return (
        <Col className="w-full col-lg-3">
            <Card bg="white mb-4" style={{ minWidth: '12rem' }}>
                {/* <Card.Header> </Card.Header> */}
                <Card.Body>
                    <Card.Title>
                        <Badge variant="warning">Todo</Badge>
                        
                    </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="btn-sm">Update Task</Button>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Task
