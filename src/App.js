import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Router history={history}>
      <div>
        <nav className="navbar header-bg navbar-expand text-white">
          <div className="navbar-brand">Star Wars</div>
          {currentUser && (
            <div className="navbar-nav ml-auto">
              <li className="nav-item text-white p-2">{currentUser.name}</li>
              <li className="nav-item">
                <a
                  href="/login"
                  className="nav-link btn btn-sm btn-secondary"
                  onClick={logOut}
                >
                  Log out
                </a>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
