import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Nav from "./components/Navbar/Navbar";
import AddContact from "./components/AddContact/Addcontact";
import EditContact from "./components/EditContact/EditContact";
import Home from "./components/Home/Home";

function ContactApp() {
  return (
    <div>
      <ToastContainer />
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/add" component={() => <AddContact />} />
          <Route path="/edit/:id" component={() => <EditContact />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default ContactApp;
