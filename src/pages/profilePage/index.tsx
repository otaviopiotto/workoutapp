import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiLogout,
  HiOutlineArrowNarrowLeft,
  HiOutlinePencil,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import InputComponent from "../../components/formComponents/input";
import { useAuth } from "../../hooks/auth";
import { useMutationQuery } from "../../services/hooks/useMutationQuery";
import { Container } from "./styles";

interface inputProp {
  name?: string;
  username?: string;
}

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, signOut, updateProfile } = useAuth();
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, setValue, setError } = useForm<inputProp>();

  const { mutate: onEditUser, isLoading } = useMutationQuery(
    `/user/${user._id}`,
    "put"
  );

  useEffect(() => {
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

  return (
    <Container>
      <header>
        <div className="user-info">
          <h1>{user.name}</h1>
          <p>username: {user.username}</p>
        </div>
      </header>

      {edit && (
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
      {!edit && (
        <footer>
          <div className="get-back-section">
            <Button buttonStyle="Text" onClick={() => navigate(-1)}>
              <HiOutlineArrowNarrowLeft />
            </Button>
            <Button buttonStyle="Text" onClick={() => setEdit(true)}>
              <HiOutlinePencil />
            </Button>
            <Button buttonStyle="Text" onClick={() => signOut()}>
              <HiLogout />
            </Button>
          </div>
        </footer>
      )}
    </Container>
  );
};

export default ProfilePage;
