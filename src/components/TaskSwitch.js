import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const TaskSwitch = () => {
    const [state, setstate] = useState('')
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`)

    return (
        <Nav className="rounded" variant="pills" activeKey="2" onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link className="rounded-top" eventKey="1" href="#">
                All Tasks
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="" eventKey="2" title="todo">
                Todo
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" title="done">
                Done
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" title="done">
                Create New
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default TaskSwitch
