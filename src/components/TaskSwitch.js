import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'

const TaskSwitch = () => {
    const [state, setstate] = useState('2')
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`)

    return (
        <Nav className="bg-white rounded" variant="pills" activeKey={state} onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey="1" href="#" onClick={() => setstate('1')}>
                All Tasks
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" title="todo">
                Todo
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" title="done">
                Done
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default TaskSwitch
