import styled from "styled-components";

export const ProjOverlay = styled.div`
  min-height: calc(100vh - 67px);
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  background: none;
  @media (max-width: 767px) {
    padding: 0 25px;
  }

  h2 {
    color: #173b6c;
    font-size: 30px;
    border-bottom: 1px solid #173b6c;
    font-weight: 500;
    margin-bottom: 30px;
    padding-bottom: 5px;
    text-align: center;
  }

  nav {
    margin-bottom: 20px !important;
  }
  .nav-pills .nav-link {
    border-radius: 15px 15px !important;
    background-color: #747474;
    margin-right: 10px;
    color: #fff;

    &.active {
      color: #fff !important;
      background-color: #007bff;
    }
  }

  .col-md-3 {
    border: 1px solid #495057;
  }
  @media (max-width: 767px) {
    .col-md-3 {
      text-align: center;
    }
  }
`;
