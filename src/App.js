import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./App.css";

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

  //container from bootstrap
  // fluid= {true} --> take up entire width of screen
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}></Container>
      </Router>
    );
  }
}

export default App;
