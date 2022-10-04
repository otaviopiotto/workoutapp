import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutationQuery } from "../../../../services/hooks/useMutationQuery";
import InputComponent from "../../../formComponents/input";
import Button from "../../../Button";
import { Form } from "./styles";

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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<inputProp>({
    resolver: yupResolver(schema),
  });

  const { mutate: onAddGroup, isLoading } = useMutationQuery(
    `user/group/${id}`,
    id ? "put" : "post"
  );

  useEffect(() => {
    if (id) {
      setValue("title", data.title);
    }
  }, [id]);

  const onSubmit = ({ title }: any) => {
    //PUT
    console.log(id);
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
      //POST
    } else {
      onAddGroup(
        {
          ...data,
          title,
        },
        {
          onSuccess: () => {
            toast.success("Grupo Criado");
            navigate(-1);
          },
          onError: (err) => console.log(err),
        }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        placeholder="Título"
        inputSize="Large"
        register={{ ...register("title") }}
        error={errors.title?.message}
      />

      <Button
        buttonStyle="Primary"
        size="Large"
        type="submit"
        loading={isLoading}
      >
        Salvar
      </Button>

      <Button buttonStyle="Text" onClick={onClose}>
        Cancelar
      </Button>
    </Form>
  );
};
export default SaveGroup;
