import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

const Login = React.lazy(() => import('./components/login/login'));
const Dashboard = React.lazy(() => import('./components/Dashboard/dashboard'));

function App() {
  return (
    <>
    <Router>
      <React.Suspense fallback={true}>
        <Routes>
           <Route exact path="/" name="Login Page" element={ <Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </React.Suspense>
    </Router>
    </>
  )
}

export default App;
