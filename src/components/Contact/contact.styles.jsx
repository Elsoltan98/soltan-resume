import styled from "styled-components";

export const ContactOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e8e8e8;
  padding: 80px 20px 50px;

  h4 {
    color: #173b6c;
    font-size: 30px;
    border-bottom: 1px solid #173b6c;
    font-weight: 500;
    margin-bottom: 30px;
    padding-bottom: 5px;
  }
`;

export const ContactP = styled.p`
  color: rgb(23, 59, 108);
  i {
    color: rgb(0, 123, 255);
    padding-right: 5px;
  }

  span {
    color: #333;
  }
`;

export const Footer = styled.div`
  background-color: #173b6c;
  color: #fff;
  padding: 15px;

  p {
    margin-bottom: 0px;

    span {
      color: #007bff;
    }
  }
`;
