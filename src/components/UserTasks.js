import React from 'react'
import { Switch, Route, withRouter, useRouteMatch, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Tasks from './Tasks'
import TaskSwitch from './TaskSwitch'

const UserTasks = () => {

    let { id } = useParams();
    console.log(id)

    return (
        <Container>
            <Row className="mt-5 mb-4 px-4 d-flex flex-sm-col flex-md-row flex-wrap justify-content-between align-items-md-center">
                <h3 className="mb-3 md:mb-0 mr-4">User name</h3>
                <TaskSwitch />
            </Row>
            <Tasks />
        </Container>
    )
}

export default UserTasks