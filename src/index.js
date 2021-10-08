import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style.css";

function Input(props) {
  return (
    <div className="mt-4 mb-4">
      <div className="input-group">
        <div className="form-floating flex-grow-1">
          <input
            type={props.type}
            id={props.id}
            maxLength={props.maxLength}
            pattern="[0-9]{4}"
            className="form-control"
            placeholder="hi"
          ></input>
          <label htmlFor={props.id} className="form-label">
            {props.label}
          </label>
        </div>
        {/* Eventually I was planning to use the below to display info like "38 out of 48 characters used", etc. */}
        {/* <span className="input-group-text" id="basic-addon2">
          30/48
        </span> */}
      </div>
      <div id={props.id + "Help"} className="form-text">
        {props.help}
      </div>
    </div>
  );
}

function Form(props) {
  return (
    <div>
      <h2>Post a Message</h2>
      <p>
        Use the below form to post a short message to our platform. All messages
        are protected by a pin. Posted messages can be accessed{" "}
        <Link className="" to="list">
          here
        </Link>
        .
      </p>
      <form>
        <Input
          type="text"
          id="name"
          label="Name"
          help="Note: This dislay name will be publicly listed."
        />
        <Input
          type="email"
          id="email"
          label="Email Address"
          help="This will not be publicly displayed, but is for analytics purposes."
        />
        <Input
          type="password"
          id="pin"
          label="Pin"
          maxLength="4"
          help="Provide exactly four numbers."
        />
        <Input
          type="text"
          id="message"
          label="Message"
          maxLength="48"
          help="Keep the message within 48 characters."
        />
        <button className="btn btn-primary">Post</button>
      </form>
    </div>
  );
}

function Home() {
  return <Form />;
}

function List(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Timestamp</th>
          <th scope="col">Name</th>
          <th scope="col">Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">2021-10-05T14:23Z</td>
          <td>A general update</td>
          <td>
            <button className="btn btn-primary">Reveal</button>
          </td>
        </tr>
        <tr>
          <td scope="row">2021-09-023T11:01Z</td>
          <td>Matt's Welcome</td>
          <td>
            <button className="btn btn-primary">Reveal</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function App(props) {
  return (
    <div className="container-fluid gx-0 gy-2 " style={{ height: "100%" }}>
      <header className="navbar navbar-expand-lg navbar-dark bg-primary gx-3">
        <nav className="container-fluid">
          <a className="navbar-brand row gx-2" href="/">
            <span className="col">
              {/* Taken from https://icons.getbootstrap.com/icons/envelope-fill/ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                margin="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                alt=""
                className="d-inline-block align-text-top bi bi-envelope-fill gx-3"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>
            </span>
            <span className="col">MessageStore</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/list">
                  List
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <span>&nbsp;</span>
      <div className="container-sm p-3 shadow rounded">
        {/* Add a bit of vertical padding here */}

        <Router>
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
