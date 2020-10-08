import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQueryCache } from "react-query";
import useTasks from "../hooks/useTasks";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Tasks from './Tasks'
import TaskSwitch from './TaskSwitch'
import Navbar from './Navbar'
import CreateUser from './CreateUser'

const UserTasks = () => {
    const cache = useQueryCache();
    const { status, data, error, isFetching } = useTasks();
    if(status !== "loading") {console.log(data)}

    let { id } = useParams();
    console.log(status)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar text="Create User" handleShow={handleShow} >
                <CreateUser show={show} handleClose={handleClose} />
            </Navbar>
            <Container>
                <Row className="mt-5 mb-4 px-4 d-flex flex-sm-col flex-md-row flex-wrap justify-content-between align-items-md-center">
                    <h3 className="mb-3 md:mb-0 mr-4">User Tasks</h3>
                    <TaskSwitch />
                </Row>
                {status === "loading" ? (
                    "Loading..."
                    ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                    ) :
                    <Tasks tasks={data.data}/>
                    }
            </Container>
        </>
    )
}

export default UserTasks
