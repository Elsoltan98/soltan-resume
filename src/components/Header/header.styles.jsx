import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";

import { Link as Scroll } from "react-scroll";

export const LogoImage = styled(Image)`
  width: 150px;
  height: 50px;
`;

export const CustomNavbar = styled(Navbar)`
  background-color: #fff;
  border-bottom: 1px solid #c3c3c3;
`;
export const CustomNavLink = styled(Scroll)`
  color: #000 !important;
  text-decoration: none !important;
  padding-right: 10px;
  padding-top: 10px;
  cursor: pointer;
  &.active {
    color: #0091c7 !important;
  }
`;
