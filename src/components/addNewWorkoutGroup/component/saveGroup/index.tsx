import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./styles";
import InputComponent from "../../../formComponents/input";
import Button from "../../../Button";
import { useGroup } from "../../../../hooks/exerciseGroup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

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
  const { createGroup, updateGroup } = useGroup();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<inputProp>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (id) setValue("title", data.title);
  }, [id]);

  const onSubmit = ({ title }: any) => {
    if (id) {
      updateGroup({ ...data, id });
    } else {
      createGroup({
        title,
        id: (Math.random() * (1000000000 - 1) + 1).toFixed(0),
        ...data,
      });

      toast.success("Grupo Criado");
    }
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!id && (
        <InputComponent
          placeholder="Título"
          inputSize="Large"
          register={{ ...register("title") }}
          error={errors.title?.message}
        />
      )}
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
