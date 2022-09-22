import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "../../components/Button";
import InputComponent from "../../components/formComponents/input";
import { useAuth } from "../../hooks/auth";
import { useMutationQuery } from "../../services/hooks/useMutationQuery";
import { Container } from "./styles";

interface inputProp {
  name?: string;
  username: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("O Nome é obrigatório"),
  username: Yup.string(),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<inputProp>({
    resolver: yupResolver(schema),
  });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const { mutate: onRegister, isLoading } = useMutationQuery("/user/register");

  const onSubmit = (data: inputProp) => {
    onRegister(data, {
      onSuccess: () => {
        toast.success("Conta Criada com sucesso!");
        toast.update("Redirecionando...");
        delete data.name;
        signIn(data.username, data.password);
      },
      onError: (err: any) => {
        console.log(err.response);
        if (err.response.data.code === 11000) {
          setError("username", { message: "Username já cadastrado" });
        }
      },
    });
  };

  return (
    <Container>
      <header className="group-header">
        <div className="get-back-section">
          <div className="edit-buttons">
            <Button buttonStyle="Text" onClick={() => navigate(-1)}>
              <HiOutlineArrowNarrowLeft />
            </Button>
          </div>
        </div>
      </header>
      <h1>Crie uma Conta</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Nome Sobrenome"
          required
          error={errors.name?.message}
          register={{ ...register("name") }}
        />
        <InputComponent
          label="Username"
          error={errors.username?.message}
          register={{ ...register("username") }}
        />
        <InputComponent
          label="Senha"
          type="password"
          register={{ ...register("password") }}
        />
        <Button buttonStyle="Primary" type="submit" loading={isLoading}>
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default RegisterPage;
