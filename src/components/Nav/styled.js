import styled from "styled-components";

export const Navbar = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;
`;

export const NavMenuItem = styled.li`
  height: 80px;
`;

export const NavMenuLink = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    cursor: pointer;
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
`;



export const Drop = styled.div`
background: #ffffff;
border-radius: 8px;
position: absolute;
top: 60px;
right: 0;
width: 300px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
opacity: 0;
visibility: hidden;
transform: translateY(-20px);
transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  &#active{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
