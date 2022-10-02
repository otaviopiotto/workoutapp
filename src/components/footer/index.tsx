import { HiOutlineHome, HiOutlinePlus, HiOutlineUser } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import { Container } from "./styles";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
      >
        <HiOutlineHome />
      </NavLink>
      <Button buttonStyle="Text" onClick={() => navigate("novo-grupo")}>
        <HiOutlinePlus />
      </Button>
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
