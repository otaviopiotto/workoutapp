import Button from "../Button";
import { GroupType } from "../../models/exercise";
import { Card } from "./styles";
import { HiOutlineCalendar, HiOutlineChevronRight } from "react-icons/hi";

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
          <span className="sideways">Treino</span>
          <div className="middle-part">
            <div className="top-section">
              <h1>{group_data?.title}</h1>
            </div>

            <ul className="bottom-section">
              <li>
                <HiOutlineCalendar /> {group_data?.days?.length}{" "}
                {group_data?.days?.length > 1 ? "Dias" : "Dia"}
              </li>
            </ul>
          </div>
        </section>
        <div className="arrow">
          <HiOutlineChevronRight className="arrow-icon" />
        </div>
      </Card>
    </Button>
  );
};

export default GroupCard;
