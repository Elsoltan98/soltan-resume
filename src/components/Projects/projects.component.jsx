import React from "react";

import { Link } from "react-router-dom";

import { ProjOverlay } from "./projects.styles";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class Projects extends React.Component {
  state = {
    react: [
      {
        id: 1,
        img: "/images/react-1.png",
        url: "https://soltan-shop.herokuapp.com/",
        alt: "clothing shop",
        height: "165px",
      },
      {
        id: 2,
        img: "/images/react-2.png",
        url: "https://egypt-guide.herokuapp.com/",
        alt: "Egypt Guide",
        height: "165px",
      },
      {
        id: 3,
        img: "/images/react-3.png",
        url: "https://find-image.netlify.app",
        alt: "image search",
        height: "165px",
      },
      {
        id: 4,
        img: "/images/react-4.png",
        url: "https://get-city-weather.netlify.app",
        alt: "Get weather",
        height: "165px",
      },
    ],
    js: [
      {
        id: 5,
        img: "/images/js-1.png",
        url: "https://nice-game.netlify.app",
        alt: "Nice game",
        height: "165px",
      },
      {
        id: 6,
        img: "/images/js-2.png",
        url: "https://nice-budget.netlify.app",
        alt: "Nice budget",
        height: "165px",
      },
    ],
    temp: [
      {
        id: 7,
        img: "/images/temp1.png",
        url: "https://soltanlaster.netlify.app",
        alt: "Laster site",
        height: "165px",
      },
      {
        id: 8,
        img: "/images/temp2.png",
        url: "https://soltanconstruction.netlify.app",
        alt: "Construction site",
        height: "165px",
      },
    ],
  };

  componentDidMount() {
    console.log(this.state.react.map((el) => el.alt));
  }

  render() {
    return (
      <div id="projects" style={{ paddingBottom: "70px" }}>
        <ProjOverlay>
          <h2
            style={{
              marginTop: "80px",
            }}
          >
            Visit My Projects
          </h2>
          <Container>
            <Tabs
              defaultActiveKey="all"
              transition={false}
              id="noanim-tab-example"
              variant="pills"
              style={{ justifyContent: "center", marginBottom: "10px" }}
            >
              <Tab eventKey="all" title="All">
                <Row>
                  {this.state.react.map(({ id, img, url, alt, height }) => {
                    return (
                      <Col key={id} style={{ padding: "5px" }} md={3} xs={12}>
                        <Link
                          to={{
                            pathname: url,
                          }}
                          target="_blank"
                        >
                          <img
                            src={img}
                            alt={alt}
                            className="img-fluid"
                            style={{ height: height }}
                          />
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
                <Row>
                  {this.state.js.map(({ id, img, url, alt, height }) => {
                    return (
                      <Col key={id} style={{ padding: "5px" }} md={3} xs={12}>
                        <Link
                          to={{
                            pathname: url,
                          }}
                          target="_blank"
                        >
                          <img
                            src={img}
                            alt={alt}
                            className="img-fluid"
                            style={{ height: height }}
                          />
                        </Link>
                      </Col>
                    );
                  })}
                  {this.state.temp.map(({ id, img, url, alt, height }) => {
                    return (
                      <Col key={id} style={{ padding: "5px" }} md={3} xs={12}>
                        <Link
                          to={{
                            pathname: url,
                          }}
                          target="_blank"
                        >
                          <img
                            src={img}
                            alt={alt}
                            className="img-fluid"
                            style={{ height: height }}
                          />
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="react" title="React">
                <Row>
                  {this.state.react.map(({ id, img, url, alt, height }) => {
                    return (
                      <Col key={id} style={{ padding: "5px" }} md={3} xs={12}>
                        <Link
                          to={{
                            pathname: url,
                          }}
                          target="_blank"
                        >
                          <img
                            src={img}
                            alt={alt}
                            className="img-fluid"
                            style={{ height: height }}
                          />
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="javascript" title="Javascript">
                <Row>
                  {this.state.js.map(({ id, img, url, alt, height }) => {
                    return (
                      <Col md={3} xs={12} key={id} style={{ padding: "5px" }}>
                        <Link
                          to={{
                            pathname: url,
                          }}
                          target="_blank"
                        >
                          <img
                            src={img}
                            alt={alt}
                            className="img-fluid"
                            style={{ height: height }}
                          />
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="template" title="Template">
                <Row>
                  {this.state.temp.map(({ id, img, url, alt, height }) => {
                    return (
                      <Col md={3} xs={12} key={id} style={{ padding: "5px" }}>
                        <Link
                          to={{
                            pathname: url,
                          }}
                          target="_blank"
                        >
                          <img
                            src={img}
                            alt={alt}
                            className="img-fluid"
                            style={{ height: height }}
                          />
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </ProjOverlay>
      </div>
    );
  }
}

export default Projects;
