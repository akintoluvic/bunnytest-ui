import React, {useState} from 'react'
import UpdateTask from './modals/UpdateTask'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Task = ({task}) => {


    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        // updateTasks()
    };
    const handleShow = () => setShow(true);

    return (
        <Col className="w-full col-lg-3">
            <Card bg="white mb-4" style={{ minWidth: '12rem', minHeight: '11rem' }}>
                <Card.Body>
                    <Card.Title>
                        <Badge variant="warning">{task.state}</Badge>
                    </Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Button variant="primary" className="btn-sm" onClick={() => handleShow()}>Update Task</Button>
                    <UpdateTask task={task} show={show} handleClose={handleClose} />

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Task
