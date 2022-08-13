import Button from "../Button";
import { GroupType } from "../../models/exercise";
import { Card } from "./styles";
import { AiOutlineCalendar, AiOutlineRight } from "react-icons/ai";

interface GroupProp {
  group_data: GroupType;
  onClick: () => void;
}

const GroupCard = ({ group_data, onClick }: GroupProp) => {
  return (
    <Button
      buttonStyle="Text"
      onClick={onClick}
      style={{ padding: 0, width: "100%", textAlign: "left" }}
    >
      <Card>
        <section className="left-side">
          <div className="top-section">
            <span>Treino</span>
            <h1>{group_data?.title}</h1>
          </div>

          <ul className="bottom-section">
            <li>
              <AiOutlineCalendar /> {group_data?.days?.length}{" "}
              {group_data?.days?.length > 1 ? "Dias" : "Dia"}
            </li>
          </ul>
        </section>
        <div className="arrow">
          <AiOutlineRight />
        </div>
      </Card>
    </Button>
  );
};

export default GroupCard;
