import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";
import { useGroup } from "../../../hooks/exerciseGroup";
import { dayType, exerciseType } from "../../../models/exercise";

const defaultList = ["Exercícios", "Séries", "Repetições"];
const offList = ["Off", "Off", "Off"];

const WorkOutInnerPage = () => {
  const [workOutData, setWorkOutData] = useState<dayType>(null as any);
  const { group } = useGroup();
  const { state }: any = useLocation();

  useEffect(() => {
    const filterGroup = group.filter((e) => e?.id === state.groupId);
    const filterDay = filterGroup[0].days.filter((e) => e.id === state.id);
    setWorkOutData(filterDay[0]);
  }, [group, state]);

  return (
    <Container>
      <div className="decoration-lines">
        <span />
        <span />
      </div>
      <section className="hero-section">
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
      </section>

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
            <li>{e.sets}x</li>
            <li>{e.repetition}</li>
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default WorkOutInnerPage;
