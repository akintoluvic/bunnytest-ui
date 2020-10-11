import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import UserTasks from './components/views/UserTasks'
import Users from './components/views/Users'

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {  refetchOnWindowFocus: true, },
  },
})

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="App bg-light" style={{height: "100vh", overflowY: "scroll"}}>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/users/:id">
              <UserTasks />
            </Route>
          </Switch>
      </div>
    </ReactQueryCacheProvider>
  );
}

export default withRouter(App)
