import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Skills extends React.Component {
  state = {
    skills: [
      {
        id: 1,
        lang: "Html/Html5",
        per: 100,
        img: "https://image.flaticon.com/icons/svg/226/226269.svg",
      },
      {
        id: 2,
        lang: "Css/Css3",
        per: 100,
        img: "https://image.flaticon.com/icons/svg/732/732190.svg",
      },
      {
        id: 3,
        lang: "Bootstrap",
        per: 100,
        img: "https://img.icons8.com/color/240/000000/bootstrap.png",
      },
      {
        id: 4,
        lang: "Javascript",
        per: 90,
        img: "https://img.icons8.com/color/144/000000/javascript.png",
      },
      {
        id: 5,
        lang: "React",
        per: 90,
        img: "https://img.icons8.com/color/144/000000/react-native.png",
      },
      {
        id: 6,
        lang: "Redux",
        per: 90,
        img: "https://img.icons8.com/color/144/000000/redux.png",
      },
      {
        id: 7,
        lang: "Git/Github",
        per: 70,
        img: "https://img.icons8.com/color/144/000000/git.png",
      },
      {
        id: 8,
        lang: "RestApi",
        per: 100,
        img: "https://img.icons8.com/nolan/100/api-settings.png",
      },
      {
        id: 9,
        lang: "Photoshop",
        per: 95,
        img: "https://img.icons8.com/fluent/144/000000/adobe-photoshop.png",
      },
      {
        id: 10,
        lang: "Node js",
        per: 80,
        img: "https://img.icons8.com/color/144/000000/nodejs.png",
      },
    ],
  };

  render() {
    return (
      <div
        id="skills"
        style={{
          backgroundColor: "#e8e8e8",
          padding: "100px 20px",
        }}
      >
        <Container>
          <Row className="text-center">
            {this.state.skills.map(({ id, lang, per, img }) => (
              <Col key={id} md={6} xs={12} style={{ marginBottom: "15px" }}>
                <img
                  src={img}
                  alt={lang}
                  className="img-fluid"
                  style={{
                    width: "75px",
                    marginBottom: "5px",
                  }}
                />
                <p style={{ margin: "0" }}>{lang}</p>
                <div
                  style={{
                    width: `${per}%`,
                    height: "15px",
                    background:
                      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 53%, rgba(255,0,0,1) 100%)",
                    marginBottom: "5px",
                  }}
                ></div>
                <span>{per}%</span>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;
