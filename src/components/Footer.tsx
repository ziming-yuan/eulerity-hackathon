import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  margin-top: 40px;

  p {
    margin: 0;
    font-size: 16px;
    @media (max-width: 576px) {
      font-size: 14px;
    }
    margin: 10px;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()} Pet Gallery. All rights reserved.</p>
      <p>
        Designed by <a href="https://github.com/ziming-yuan">Ziming Yuan</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
