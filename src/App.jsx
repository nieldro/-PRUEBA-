import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AppProvider from './pages/AppContext';
import Transactions from './pages/Transactions';
import Investments from './pages/Investments';
import CreditCards from './pages/Creditcards';
import Loans from './pages/Loans';
import Services from './pages/Services';
import Privileges from './pages/Privileges';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Header from './components/Header';

const AppWrapper = () => {
  return (
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  );
};

const App = () => {
  const location = useLocation();

  const hideNavbarAndHeaderRoutes = ['/', '/register'];
  const showNavbarAndHeader = !hideNavbarAndHeaderRoutes.includes(location.pathname);
  const isActiveRoute = hideNavbarAndHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showNavbarAndHeader && <Navbar />}
      <div className={`container-content ${isActiveRoute ? 'active' : ''}`}>
        {showNavbarAndHeader && <Header />}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/Transactions" component={Transactions} />
          <Route path="/Investments" component={Investments} />
          <Route path="/CreditCards" component={CreditCards} />
          <Route path="/Loans" component={Loans} />
          <Route path="/Services" component={Services} />
          <Route path="/Privileges" component={Privileges} />
          <Route path="/Settings" component={Settings} />
          <Route path="/profile">
            <Profile email="admin@gmail.com" password="admin123" />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default AppWrapper;
