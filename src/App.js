import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './components/auth/Profile';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import PrivateRoute from './components/auth/PrivateRoute';
import ForgotPassword from './components/auth/ForgotPassword';
import UpdateProfile from './components/auth/UpdateProfile';
import Dashboard from './components/dilly/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Dilly */}
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/category/:categoryId' component={Dashboard} />

          {/* User */}
          <PrivateRoute path='/user' component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />

          {/* Auth */}
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
