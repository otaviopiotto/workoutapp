import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/Button";
import { useMutationQuery } from "../../../../services/hooks/useMutationQuery";
import { Container } from "./styles";

interface deleteProps {
  onClose(): void;
  id: string | number;
}

const DeleteModal = ({ onClose, id }: deleteProps) => {
  const { mutate: onAddGroup } = useMutationQuery(`user/group/${id}`, "delete");
  const navigate = useNavigate();

  const handleDelete = () => {
    onAddGroup("", {
      onSuccess: () => {
        toast.success("Grupo Deletado");
        navigate("/");
      },
    });
  };

  return (
    <Container>
      <Button buttonStyle="Text" onClick={onClose}>
        Cancelar
      </Button>
      <Button
        buttonStyle="Primary"
        dangerous
        onClick={handleDelete}
        style={{ color: "white" }}
      >
        Excluir
      </Button>
    </Container>
  );
};

export default DeleteModal;
