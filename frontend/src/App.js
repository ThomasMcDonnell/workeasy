import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Application Pages
import Landing from './pages/home/landing';
import Register from './pages/auth/register';
import Login from './pages/auth/login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Register} path="/accounts/register" />
        <Route component={Login} path="/accounts/login" />
        <Route component={Landing} path="/" />
      </Switch>
    </div>
  );
}

export default App;
