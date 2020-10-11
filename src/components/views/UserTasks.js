import React, { useState, useEffect } from 'react'
import axios from "axios"
import {getUserTasks} from "../axios/userTasks"
import { useParams } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Tasks from './Tasks'
import Navbar from './Navbar'
import Button from 'react-bootstrap/Button'
import CreateTask from '../modals/CreateTask'
import {taskbaseUrl} from "../../baseUrl"

const UserTasks = () => {
    const [tasks, settasks] = useState([])
    let { id } = useParams();

    
      
      useEffect(() => {
        settasks(getUserTasks(id))
        
        const data = getUserTasks(id)
        console.log(data)
      }, 
      // eslint-disable-next-line
      []);
    

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        settasks(getUserTasks(id))
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar text="Create Task" handleShow={handleShow} >
                <CreateTask userid={id} show={show} handleClose={handleClose} />
            </Navbar>
            <Container>
                <Row className="mt-5 mb-4 px-4 d-flex flex-sm-col flex-md-row flex-wrap justify-content-between align-items-md-center">
                    <h3 className="mb-3 md:mb-0 mr-4">
                        UserTasks
                    </h3>
                    
                    <LinkContainer to="/" className="mb-3 md:mb-0 mr-4">
                        <Button variant="primary" className="btn-sm">Back to Users</Button>
                    </LinkContainer>
                </Row>
                {tasks.length === 0 ? (
                    "Loading..."
                    ) : 
                    <Tasks tasks={tasks}/>
                    }
            </Container>
        </>
    )
}

export default UserTasks
