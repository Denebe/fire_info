import React from "react";
import * as Styled from "./styled";

const Nav = () => {
  return (
    <Styled.Navbar>
      <Styled.NavContainer>
        <Styled.NavLogo>로고</Styled.NavLogo>

        <Styled.NavMenu>
          <Styled.NavMenuItem>
            <Styled.NavMenuLink>전국</Styled.NavMenuLink>
          </Styled.NavMenuItem>

          <Styled.NavMenuItem>
            <Styled.NavMenuLink>지역별</Styled.NavMenuLink>
          </Styled.NavMenuItem>
        </Styled.NavMenu>
      </Styled.NavContainer>
    </Styled.Navbar>
  );
};

export default Nav;
