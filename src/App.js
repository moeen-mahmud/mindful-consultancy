// Importing React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing stylesheet
import "./App.css";

// Importing Components
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Specialists from "./Pages/Specialists/Specialists/Specialists";
import ServiceDetails from "./Pages/Home/Services/ServiceDetails/ServiceDetails";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import ContextProvider from "./context/ContextProvider";
import UserAccount from "./Pages/User/UserAccount/UserAccount";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import SelfTest from "./Pages/SelfTest/SelfTest";

// Main App Component
function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/specialists">
              <Specialists></Specialists>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/self-test">
              <SelfTest></SelfTest>
            </PrivateRoute>
            <PrivateRoute exact path="/user">
              <UserAccount></UserAccount>
            </PrivateRoute>
            <PrivateRoute exact path="/service/:serviceName">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
