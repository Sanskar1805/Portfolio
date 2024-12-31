import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub
} from "react-icons/si";

import {
  DiTerminal,
  DiWindows,
  DiGithub
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows/>
      </Col>
    </Row>
  );
}

export default Toolstack;
