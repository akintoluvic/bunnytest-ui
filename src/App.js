import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import Users from './components/Users'



function App() {
  return (
    <div className="App bg-light" style={{height: "100vh", overflowY: "scroll"}}>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/users">
            <Tasks />
          </Route>
          <Route path="/">
            <Users />
          </Route>
          
        </Switch>
      </Container>
    </div>
  );
}

export default withRouter(App)
