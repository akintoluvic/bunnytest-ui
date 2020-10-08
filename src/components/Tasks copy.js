import React from 'react'
import { Switch, Route, withRouter, useRouteMatch, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Task from './Task'
import TaskSwitch from './TaskSwitch'

const Tasks = () => {
    return (
        <Container>
            <Row className="mt-5 mb-4 d-flex flex-row flex-wrap justify-content-center justify-content-md-between align-items-center">
                <h3 className="pb-3 md:pb-0">User name</h3>
                <TaskSwitch />
            </Row>
            
            <Row className="mx-n4 flex flex-row flex-wrap px-auto">
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
            </Row>
        </Container>
    )
}

export default Tasks