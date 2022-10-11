import { ReactNode } from "react";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "./styles";

interface FooterProps {
  addons?: ReactNode;
}

const Footer = ({ addons }: FooterProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
      >
        <HiOutlineHome />
      </NavLink>
      {addons}
      <NavLink
        to="/perfil"
        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
      >
        <HiOutlineUser />
      </NavLink>
    </Container>
  );
};

export default Footer;
