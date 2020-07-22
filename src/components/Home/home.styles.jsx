import styled from "styled-components";

export const HomeDiv = styled.div``;

export const HomeBg = styled.div`
  background-image: url("/images/home-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 67px);
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.3);
  min-height: calc(100vh - 67px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const MyImg = styled.img`
  width: 200px;
  border: 1px solid #6f6f6f;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const H1Style = styled.h1`
  font-size: 27px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  width: 380px;
  margin: 0 auto 15px;
`;

export const H2Style = styled.h2`
  color: #150086;
  font-size: 23px;
`;
