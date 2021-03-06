import React, { useState } from 'react'
import {createTask} from "../axios/createTask";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateUser = ({ userid, show, handleClose }) => {
    const [state, setstate] = useState('todo')
    const [description, setdescription] = useState('')

    const handleSubmit = () => {
        createTask({state: state, description: description, userid: userid})
        handleClose()
    }
    
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Create task</Modal.Title>
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
                        <Form.Control type="text" placeholder="Enter task description"
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
                Create Task
            </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default CreateUser
