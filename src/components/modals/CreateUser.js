import React, { useState } from 'react'
import {createUser} from "../axios/createUser";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateUser = ({ show, handleClose}) => {
    const [state, setstate] = useState('')

    const handleSubmit = () => {
        createUser({name: state})
        handleClose()
        // let data = useQuery("users")
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
                </Form>
            </Modal.Body>
            
            
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Create User
            </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default CreateUser
