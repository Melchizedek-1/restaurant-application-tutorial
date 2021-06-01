import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import NotFound from './NotFound';
import './App.css';


const App = () => (
<BrowserRouter>
  <Header />
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/user/dashboard' component={UserDashboard} />
      <Route exact path='/admin/dashboard' component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  </main>
</BrowserRouter>
);

export default App;
