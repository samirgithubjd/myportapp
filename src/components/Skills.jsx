import React from "react";
import Card from "react-bootstrap/Card";
import HTMLlogo from "./HTMLlogo.png";
import csslogo from "./csslogo.png";
import jslogo from "./jslogo.png";
import reactlogo from "./reactlogo.png";

const Skills = () => {
  return (
    <div className="container1">
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={HTMLlogo} />
        <Card.Body>
          <Card.Title>HTML</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={csslogo} />
        <Card.Body>
          <Card.Title>CSS</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={jslogo}
          style={{
            height: "215px",
            width: "180px",
            marginLeft: "30px",
            marginTop: "25px",
          }}
        />
        <Card.Body>
          <Card.Title>JavaScript</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={reactlogo} />
        <Card.Body>
          <Card.Title>React Js</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

     
    </div>
  );
};

export default Skills;
