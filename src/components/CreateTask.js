import React, { useState } from 'react'
import { useQueryCache } from "react-query";
import {createTask} from "../helpers/createTask";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateUser = ({ userid, show, handleClose}) => {
    const [state, setstate] = useState('')
    const [description, setdescription] = useState('')

    const cache = useQueryCache();
    const handleSubmit = () => {
        createTask({state: state, description: description, userid: userid})
    }
    
    
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Enter user's name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter user's name"
                        value={state}
                         onChange={e => setstate(e.target.value)}
                         required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter user's name"
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
