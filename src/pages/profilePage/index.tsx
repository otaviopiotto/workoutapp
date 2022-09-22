import { HiLogout, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  return (
    <Container>
      <header>
        <Button buttonStyle="Text" onClick={() => navigate(-1)}>
          <HiOutlineArrowNarrowLeft />
        </Button>
        <Button buttonStyle="Text" onClick={() => signOut()}>
          <HiLogout />
        </Button>
      </header>

      <h1>{user.name}</h1>
    </Container>
  );
};

export default ProfilePage;
