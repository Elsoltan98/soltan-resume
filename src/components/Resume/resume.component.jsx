import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { ResumeOverlay, AboutMe, Resumeh4, Myimg } from "./resume.styles";
class Resume extends React.Component {
  state = {
    divs: [
      {
        id: 1,
        tagName: "Name",
        ans: "Abdelhameed Mohamed Abdelhameed",
      },
      {
        id: 2,
        tagName: "Date of birth",
        ans: "1/11/1998",
      },
      {
        id: 3,
        tagName: "Education",
        ans: "I am still studying in the last year.",
      },
      {
        id: 4,
        tagName: "Certificates",
        ans: "Web Design Diploma in Russian Cultural Center.",
      },
      {
        id: 5,
        tagName: "Experience",
        ans:
          "I have gained experience by learning on Udemy and many other platforms.",
      },
    ],
  };

  renderAbout = this.state.divs.map((obj) => {
    const { id, tagName, ans } = obj;
    return (
      <React.Fragment key={id}>
        <span
          style={{ color: "#173b6c", lineHeight: "35px", fontSize: "18px" }}
        >
          <i
            className="fa fa-angle-right"
            style={{
              paddingRight: "5px",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#007bff",
            }}
          ></i>
          {tagName} :
        </span>
        <h3 style={{ fontSize: "20px", lineHeight: "30px" }}>{ans}</h3>
      </React.Fragment>
    );
  });

  render() {
    return (
      <div id="resume">
        <div>
          <ResumeOverlay>
            <Resumeh4>About Me</Resumeh4>
            <Container
              fluid
              className="text-center"
              style={{ marginBottom: "80px" }}
            >
              <Row>
                <Col md={6} xs={12}>
                  <Myimg
                    src="/images/about.jpg"
                    className="img-fluid"
                    alt="personalphoto"
                  />
                </Col>
                <Col md={6} xs={12}>
                  <AboutMe>{this.renderAbout}</AboutMe>
                </Col>
              </Row>
            </Container>
          </ResumeOverlay>
        </div>
      </div>
    );
  }
}

export default Resume;
