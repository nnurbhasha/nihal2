import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// covert App.js component into class-based component b/c using state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Nihal Nurbhasha",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects that make a difference",
        text: "Check out my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }
  // date from this state data passed as props into pages b/c pages don't have to be class-based component then; they can be functional components --> they simply display data while we maintain this state in main component
  // don't want stateful components everywhere --> issues with predictabilty

  //container from bootstrap
  // fluid= {true} --> take up entire width of screen
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Nihal Nurbhasha</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path="/about "
            render={() => <AboutPage title={this.state.about.title} />}
          />

          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
      // using React Router to say that when we are on a certain path, render or display a certain component
      // React Router uses the link component instead of anchor tag or button
      // link specifies path to be taken
      // inside of Route: whenever at specified path, render according component
      // multiple ways, but this way chosen b/c props passed
    );
  }
}

export default App;
