import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Tasks from './Tasks'
import Navbar from './Navbar'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CreateTask from '../modals/CreateTask'
import { taskbaseUrl } from "../../baseUrl"

const UserTasks = () => {
    const [tasks, settasks] = useState([])
    const [show, setShow] = useState(false);
    let { id } = useParams();

    const getUserTasks = async () => {
        try {
            const response = await axios.get(`${taskbaseUrl}/user/${id}`);
            settasks(response.data.data);
        } catch (err) { }
    }

    useEffect(() => {
        getUserTasks()
        console.log(tasks)
        // eslint-disable-next-line
    }, []);

    const handleClose = () => {
        setShow(false)
        getUserTasks()
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar text="Create Task" handleShow={handleShow} >
                <CreateTask userid={id} show={show} handleClose={handleClose} />
            </Navbar>
            <Container>
                <Row className="mt-5 mb-4 px-4 d-flex flex-sm-col flex-md-row flex-wrap justify-content-between align-items-md-center">
                    <h3 className="mb-3 md:mb-0 mr-4"> UserTasks </h3>

                    <LinkContainer to="/" className="bg-primar border-0 mb-3 md:mb-0 mr-4">
                        <Button variant="primary btn-sm">Back to Users</Button>
                    </LinkContainer>
                </Row>
                {tasks.length === 0 ? ("Loading...") :
                    <Tasks tasks={tasks} />}
            </Container>
        </>
    )
}

export default UserTasks
