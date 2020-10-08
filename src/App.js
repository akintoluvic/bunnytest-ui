import React from 'react'
import { Switch, Route, withRouter, useRouteMatch, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import UserTasks from './components/UserTasks'
import Tasks from './components/Tasks'
import Users from './components/Users'

// const users

function App() {
  return (
    <div className="App bg-light" style={{height: "100vh", overflowY: "scroll"}}>
      
        <Switch>
          <Route exact path="/">
            <Navbar text="Create User" />
            <Users />
          </Route>
          <Route path="/users/:id">
            <Navbar text="Create Task" />
            <UserTasks />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
    </div>
  );
}

export default withRouter(App)
