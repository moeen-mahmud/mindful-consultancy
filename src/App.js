import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Specialists from "./Pages/Specialists/Specialists/Specialists";
import ServiceDetails from "./Pages/Home/Services/ServiceDetails/ServiceDetails";
import SelfTest from "./Pages/SelfTest/SelfTest";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import ContextProvider from "./context/ContextProvider";

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
            <Route path="/specialists">
              <Specialists></Specialists>
            </Route>
            <Route path="/self-test">
              <SelfTest></SelfTest>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/:serviceName">
              <ServiceDetails></ServiceDetails>
            </Route>
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
