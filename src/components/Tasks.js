import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Task from './Task'
import TaskSwitch from './TaskSwitch'

const Tasks = () => {
    return (
        <>
            
            <Row className="mt-5 mb-4 flex flex-row flex-wrap justify-content-between align-items-center">
                <h3>All Tasks</h3>
                <TaskSwitch />
            </Row>
            <Row className="flex flex-row flex-wrap px-auto">
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
            </Row>
        </>
    )
}

export default Tasks
