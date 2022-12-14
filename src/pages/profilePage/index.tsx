import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineLogout,
  HiOutlinePencil,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Footer from "../../components/footer";
import InputComponent from "../../components/formComponents/input";
import UploadPictureComponent from "../../components/formComponents/picture";
import { useAuth } from "../../hooks/auth";
import { useMutationQuery } from "../../services/hooks/useMutationQuery";
import { Container } from "./styles";

interface inputProp {
  name?: string;
  username?: string;
}

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, updateProfile, refreshProfile, signOut } = useAuth();
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, setValue, setError } = useForm<inputProp>();

  const { mutate: onEditUser } = useMutationQuery(`/user/${user._id}`, "put");

  useEffect(() => {
    refreshProfile();
    setValue("name", user.name);
    setValue("username", user.username);
  }, []);

  const onSubmit = (data: inputProp) => {
    onEditUser(data, {
      onSuccess: ({ data }) => {
        toast.success("Conta Editada com sucesso!");
        updateProfile(data.data);
        setEdit(false);
      },
      onError: (err: any) => {
        if (err.response.data.code === 11000) {
          setError("username", { message: "Username já cadastrado" });
        }
      },
    });
  };

  const addButton = (
    <Button buttonStyle="Text" onClick={() => setEdit(true)}>
      <HiOutlinePencil />
    </Button>
  );

  return (
    <Container>
      <header>
        <Button buttonStyle="Text" onClick={() => navigate("/")}>
          <HiOutlineArrowNarrowLeft />
        </Button>
        <Button buttonStyle="Text" onClick={() => signOut()}>
          <HiOutlineLogout />
        </Button>
      </header>

      <section className="user-info">
        <div className="background-effect">
          <img src={user?.profile_picture?.url} alt="background-effect" />
        </div>

        <UploadPictureComponent
          maxWidth={200}
          readonly={!edit}
          imageSrc={user?.profile_picture?.url}
        />
      </section>

      {edit ? (
        <main>
          <form onSubmit={handleSubmit(onSubmit)} id="edit-form">
            <InputComponent
              label="Nome Sobrenome"
              register={{ ...register("name") }}
            />
            <InputComponent
              label="Username"
              register={{ ...register("username") }}
            />
          </form>
        </main>
      ) : (
        <div className="float-user-info">
          <h1>{user.name}</h1>
          <p>username: {user.username}</p>
        </div>
      )}
      {edit && (
        <footer className="edit-footer">
          <div className="get-back-section">
            <Button buttonStyle="Text" onClick={() => setEdit(false)}>
              Cancelar
            </Button>

            <Button buttonStyle="Primary" type="submit" form="edit-form">
              Salvar
            </Button>
          </div>
        </footer>
      )}
      {!edit && <Footer addons={addButton} />}
    </Container>
  );
};

export default ProfilePage;
