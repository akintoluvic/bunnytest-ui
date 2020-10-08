import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { QueryCache, ReactQueryCacheProvider } from "react-query";
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

const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
    <div className="App bg-light" style={{height: "100vh", overflowY: "scroll"}}>
      
        <Switch>
          <Route exact path="/">
            <Users users={users} />
          </Route>
          <Route path="/users/:id">
            <UserTasks users={users} />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
    </div>
    </ReactQueryCacheProvider>
  );
}

export default withRouter(App)
