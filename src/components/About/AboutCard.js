import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanskar Mundaniya </span>
            from <span className="purple"> Udaipur, India.</span>
            <br />
            I am currently employed as a software engineer at UBS.
            <br />
            I have completed B. Tech. in Computer Science and Engineering from NIT Jaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Rise with purpose, shine with resilience, and leave a legacy of impact."{" "}
          </p>
          <footer className="blockquote-footer">Sanskar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
