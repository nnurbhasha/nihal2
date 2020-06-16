import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content(props) {
  return (
    // use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
