import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import Users from './components/Users'
import { Switch, Route, withRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App bg-light" style={{height: "100vh", overflowY: "scroll"}}>
      <Navbar />
      <Container>
      <Switch>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/">
          <Tasks />
        </Route>
      </Switch>
      </Container>
    </div>
  );
}

export default withRouter(App)
