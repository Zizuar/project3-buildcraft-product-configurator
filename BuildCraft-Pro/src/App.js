import React, { Component } from "react";
import logo from "./GCwebslider_FC-ArchtopDbl-SDL.jpg";
import "./App.css";
import desktopImage from "./GCDC.gif";
import mobileImage from "./GCwebslider_FC-ArchtopDbl-SDL.jpg";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import Quotes from "./components/userQuotes/quotes";
import NavBar from "./components/navbar/navbar";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="App-content">
          <ToastContainer />
          <NavBar user={user} />
          <main
            style={{ backgroundImage: "./GCwebslider_FC-ArchtopDbl-SDL.jpg" }}
            className="container"
          >
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route
                path="/quotes"
                render={props => <Quotes {...props} user={this.state.user} />}
              />
              <Route path="/customers" component={Customers} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/register" />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
