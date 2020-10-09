import React, { useState } from 'react'
import {updateUser} from "../helpers/updateUser";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateUser = ({ user, show, handleClose }) => {
    const [state, setstate] = useState(user.name)

    const handleSubmit = () => {
        updateUser({name: state, _id: user._id })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Update user's name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter name"
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
                Update Task & Done
            </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default CreateUser
