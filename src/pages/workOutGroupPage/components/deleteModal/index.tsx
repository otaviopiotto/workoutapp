import { toast } from "react-toastify";
import Button from "../../../../components/Button";
import { useGroup } from "../../../../hooks/exerciseGroup";
import { Container } from "./styles";

interface deleteProps {
  onClose(): void;
  id: string | number;
}

const DeleteModal = ({ onClose, id }: deleteProps) => {
  const { deleteGroup } = useGroup();

  const handleDelete = () => {
    deleteGroup(id);
    toast.success("Grupo Deletado");
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
