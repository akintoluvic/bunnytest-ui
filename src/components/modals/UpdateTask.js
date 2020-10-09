import React, { useState } from 'react'
import {updateTask} from "../helpers/updateTask";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateUser = ({ task, show, handleClose }) => {
    const [state, setstate] = useState(task.state)
    const [description, setdescription] = useState(task.description)

    const handleSubmit = () => {
        updateTask({state: state, description: description, _id: task._id })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Enter user's name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Task status"
                        value={state}
                         onChange={e => setstate(e.target.value)}
                         required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Task description"
                        value={description}
                         onChange={e => setdescription(e.target.value)}
                         required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Update Task & Done
            </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default CreateUser
