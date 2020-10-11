import React from 'react'
import Row from 'react-bootstrap/Row'
import Task from './Task'

const Tasks = ({ tasks }) => {
    console.log(tasks.legnht)
    return (
            <Row className=" flex flex-row flex-wrap px-auto">
                Alade oo
                   {/* { tasks.map(task => <Task key={task._id} task={task} />) } */}
            </Row>
    )
}

export default Tasks
