import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="container2">
        <h1>My Projects</h1>
        <br />
        <br />
        <div className="pcards">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/v2/resize:fit:808/1*SMePd_ue_Bog48a82rlGwA.png"
            />
            <Card.Body>
              <Card.Title>Movie Ticket Booking</Card.Title>
              <Link to="./MovieTic">
                <Button variant="outline-primary">View MTB</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg"
              style={{ height: "184px" }}
            />
            <Card.Body>
              <Card.Title>Weather WebApp</Card.Title>
              <Button variant="outline-primary">View WWA</Button>{" "}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://easyshiksha.com/online_courses/assets/games/tic-tac-toe/images/page_1.png"
            />
            <Card.Body>
              <Card.Title>Tic-Tac-Toe</Card.Title>
              <Button variant="outline-primary">View TTT</Button>{" "}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "150px" }}
              src="https://www.leadsquared.com/wp-content/uploads/2021/11/banner-2-3.jpg"
            />
            <Card.Body>
              <Card.Title>School Management System</Card.Title>
              <Button variant="outline-primary">View SMS</Button>{" "}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Project;
