import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./styles";
import InputComponent from "../../../formComponents/input";
import Button from "../../../Button";
import { useGroup } from "../../../../hooks/exerciseGroup";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAuth } from "../../../../hooks/auth";
import { useMutationQuery } from "../../../../services/hooks/useMutationQuery";

interface inputProp {
  title: string;
}
const schema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
});

interface saveGroupProps {
  onClose(): void;
  id: string | number;
  data: any;
}

const SaveGroup = ({ id, data, onClose }: saveGroupProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<inputProp>({
    resolver: yupResolver(schema),
  });

  const { mutate: onAddGroup } = useMutationQuery(
    `user/group/${user._id}`,
    id ? "put" : "post"
  );

  useEffect(() => {
    if (id) {
      setValue("title", data.title);
    }
  }, [id]);

  const onSubmit = ({ title }: any) => {
    if (id) {
      onAddGroup(
        {
          ...data,
          title,
        },
        {
          onSuccess: () => {
            toast.success("Grupo Editado");
            navigate(-1);
          },
          onError: (err) => console.log(err),
        }
      );
    } else {
      onAddGroup(
        {
          ...data,
          title,
        },
        {
          onSuccess: () => {
            toast.success("Grupo Criado");
          },
          onError: (err) => console.log(err),
        }
      );

      toast.success("Grupo Criado");
    }
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        placeholder="Título"
        inputSize="Large"
        register={{ ...register("title") }}
        error={errors.title?.message}
      />

      <Button buttonStyle="Primary" size="Large" type="submit">
        Salvar
      </Button>

      <Button buttonStyle="Text" onClick={onClose}>
        Cancelar
      </Button>
    </Form>
  );
};
export default SaveGroup;
