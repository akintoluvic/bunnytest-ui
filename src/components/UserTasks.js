import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQueryCache } from "react-query";
import useTasksByUserId from "../hooks/useTasksByUserId";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Tasks from './Tasks'
import TaskSwitch from './TaskSwitch'
import Navbar from './Navbar'
import CreateTask from './CreateTask'

const UserTasks = () => {
    let { id } = useParams();
    console.log(id)
    const cache = useQueryCache();
    const { status, data, error, isFetching } = useTasksByUserId(id);
    if(status !== "loading" || "error") {console.log(data)}

    
    
    // console.log(cache.getQueryData(["users", id]))

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
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
