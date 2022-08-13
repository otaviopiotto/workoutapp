import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useGroup } from "../../../hooks/exerciseGroup";
import { dayType, exerciseType } from "../../../models/exercise";
import Button from "../../../components/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";

const defaultList = ["Exercícios", "Séries", "Repetições"];
const offList = ["Off", "Off", "Off"];

const WorkOutInnerPage = () => {
  const [workOutData, setWorkOutData] = useState<dayType>(null as any);
  const { group } = useGroup();
  const { state }: any = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const filterGroup = group.filter((e) => e?.id === state.groupId);
    const filterDay = filterGroup[0].days.filter((e) => e.id === state.id);
    setWorkOutData(filterDay[0]);
  }, [group, state]);

  return (
    <Container>
      <header className="group-header ">
        <div className="get-back-section">
          <Button
            buttonStyle="Text"
            onClick={() => navigate(-1)}
            style={{
              padding: 0,
              fontSize: "16px",
              color: "#000312",
            }}
          >
            <AiOutlineArrowLeft />
          </Button>
        </div>

        <div className="title-section">
          <div className="left-side">
            <span className="sub-title">Dia</span>
            <h1>{workOutData?.number?.toString().padStart(2, "0")}</h1>
          </div>

          <div className="right-side">
            <span className="sub-title">Grupo Muscular</span>
            <h2>{workOutData?.muscle_group}</h2>
          </div>
        </div>
      </header>

      <div className="list-container">
        <ul className="top-section">
          {(workOutData?.muscle_group.toLowerCase().includes("off")
            ? offList
            : defaultList
          ).map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>

        {workOutData?.workout?.map((e: exerciseType, i: number) => (
          <ul className="bottom-section" key={i}>
            <li>{e.exercise}</li>
            <li>{e.sets}</li>
            <li>{e.repetition}</li>
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default WorkOutInnerPage;
