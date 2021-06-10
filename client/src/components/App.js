import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import UserRoute from './UserRoute';
import AdminRoute from './AdminRoute';
import NotFound from './NotFound';
import './App.css';

import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <UserRoute exact path='/user/dashboard' component={UserDashboard} />
          <AdminRoute exact path='/admin/dashboard' component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
