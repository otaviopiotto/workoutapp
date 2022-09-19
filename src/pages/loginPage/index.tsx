import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import InputComponent from "../../components/formComponents/input";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

interface inputProp {
  username: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, setValue } = useForm<inputProp>();
  const { signIn, loading } = useAuth();

  const onSubmit = (data: inputProp) => {
    try {
      signIn(data.username, data.password);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Username"
          register={{ ...register("username") }}
        />
        <InputComponent
          label="Senha"
          type="password"
          register={{ ...register("password") }}
        />
        <Button buttonStyle="Primary" type="submit" loading={loading}>
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
