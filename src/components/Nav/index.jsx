import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { useDetectOutsideClick } from "../../Hook/useDetectOutsideClick"

const Nav = () => {
  let navigate = useNavigate();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
      setIsActive(!isActive);
  }


  return (
    <Styled.Navbar>
      <Styled.NavContainer>
        <Styled.NavLogo onClick={() => navigate("/")}>
          화재발생현황
        </Styled.NavLogo>

        <Styled.NavMenu>
          <Styled.NavMenuItem>
            <Styled.NavMenuLink onClick={() => navigate('/')}>
              전국
            </Styled.NavMenuLink>
          </Styled.NavMenuItem>
          <Styled.NavMenuItem>
            <Styled.NavMenuLink onClick={onClick}>
              지역별
            </Styled.NavMenuLink>
            <Styled.Drop
              ref={dropdownRef}
              id={isActive ? "active" : "inactive"}
            >
              지역별
             <div>
                 서울
             </div>
            </Styled.Drop>
          </Styled.NavMenuItem>

            
        </Styled.NavMenu>
      </Styled.NavContainer>
    </Styled.Navbar>
  );
};

export default Nav;
