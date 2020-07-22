import React from "react";
import Container from "react-bootstrap/Container";
import Typed from "react-typed";

import {
  HomeDiv,
  Overlay,
  MyImg,
  H1Style,
  H2Style,
  HomeBg,
} from "./home.styles";

const Home = () => {
  return (
    <HomeDiv id="home">
      <HomeBg>
        <Overlay>
          <Container>
            <div className="personal-img">
              <MyImg
                className="img-fluid"
                src="/images/portfolio.jpg"
                alt="personal"
              />
            </div>
            <H1Style>Abdelhameed Mohamed</H1Style>
            <H2Style>
              <Typed
                strings={["Front End Developer"]}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
            </H2Style>
          </Container>
        </Overlay>
      </HomeBg>
    </HomeDiv>
  );
};

export default Home;
