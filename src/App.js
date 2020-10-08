import React from 'react'
import { Switch, Route, withRouter, useRouteMatch, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import UserTasks from './components/UserTasks'
import Tasks from './components/Tasks'
import Users from './components/Users'

const users = [
  {id: 123765, name: "Ajoure John"},
  {id: 123766, name: "Bjoure John"},
  {id: 123767, name: "Cjoure John"},
  {id: 123768, name: "Djoure John"},
  {id: 123769, name: "Adoure John"}
]

function App() {
  return (
    <div className="App bg-light" style={{height: "100vh", overflowY: "scroll"}}>
      
        <Switch>
          <Route exact path="/">
            <Users users={users} />
          </Route>
          <Route path="/users/:id">
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
