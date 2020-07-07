import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import Dash from './components/shared/Dash';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/dash' component={Dash} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)
export default App;