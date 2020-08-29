import React, { lazy, Suspense, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  AuthProvider,
  AuthContext
} from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';

import { ToastProvider } from 'react-toast-notifications'

// Application Pages
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import FourOFour from './pages/FourOFour';

const LoadingFallback = () => (
  <div className="p-4">Loading...</div>
);

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/accounts/login">
      <Login />
    </Route>
    <Route path="/accounts/register">
      <Register />
    </Route>
    <Route path="*">
      <FourOFour />
    </Route>
  </Switch>
);

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <UnauthenticatedRoutes />
        </Switch>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <ToastProvider>
      <Router>
        <AuthProvider>
          <FetchProvider>
            <div className="App">
              <AppRoutes />
            </div>
          </FetchProvider>
        </AuthProvider>
      </Router>
    </ToastProvider>
  );
}

export default App;
