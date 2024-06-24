import React from "react";
import "./home.css";

const About = () => {
  return (
    <>
      <div className="about">
        <h1>
          Hello i'm{" "}
          <span style={{ color: "blue", fontSize: "40px" }}>Samir Jadav</span>,
        </h1>
        <br />
        <p>
          I'm from Rajkot, and I have studied in Darshan university 2021-2024
        </p>
        <br />
        <p>
          I have knowledge of web development languages. Always ready for learn
          new things. I have also some beginner skills in this fields like web
          development, responsive web design, problem solving.
        </p>
        <p>
          To obtain a challenging position as a Front End Web Developer Where I
          can use my extensive experience in developing interactive user
          interfaces for websites.
        </p>
      </div>
      <div className="dtls">
        <details>
          <summary>About me</summary>
          <p>Name: samir Jadav</p>
          <br />
          <p>Age: 20</p>
          <br />
          <p>DOB: 29 December 2003</p>
          <br />
          <p>Degree: B.Sc- IT(information Technology)</p> <br />
          <p>city: Rajkot gujrat</p>
        </details>
        <details>
          <summary>graduation</summary>
          <p>Darshan univercity - Rajkot</p>
          <p>SPI-7.17</p>
        </details>

        <details>
          <summary>12th</summary>
          <p>Shree vivekanand School - sardhar</p>
          <p>percentage-73.23%</p>
        </details>

        <details>
          <summary>10th</summary>
          <p>Radhika School - tramba</p>
          <p>73.50%</p>
        </details>
      </div>
    </>
  );
};

export default About;
