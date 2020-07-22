import styled from "styled-components";

export const ResumeOverlay = styled.div`
  min-height: calc(100vh - 67px);
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  padding: 0 100px;
  background: none;
  @media (max-width: 767px) {
    padding: 0 25px;
  }
`;

export const Resumeh4 = styled.h4`
  color: #173b6c;
  border-bottom: 1px solid #173b6c;
  font-size: 30px;
  margin-top: 80px;
  font-weight: 500;
  padding-bottom: 10px;
`;

export const AboutMe = styled.div`
  margin: 25px 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 25px 25px;
  padding: 25px;
`;

export const Myimg = styled.img`
  margin-top: 35px;
  border-radius: 25px 25px;
`;
