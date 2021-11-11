

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SignUp from './Pages/Login/Signup/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
       <BrowserRouter>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
        <Home></Home>
        </Route>
        <Route  path="/services">
        <Services></Services>
        </Route>
        <PrivateRoute  path="/details/:serviceId">
       <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <Route  path="/login">
        <Login></Login>
        </Route>
        <Route  path="/signup">
        <SignUp></SignUp>
        </Route>

        <Route  path="*">
        <NotFound></NotFound>
        </Route> 
        </Switch>
        <Footer></Footer>
       </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
