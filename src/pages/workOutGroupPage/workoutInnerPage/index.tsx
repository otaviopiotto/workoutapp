import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGroup } from "../../../hooks/exerciseGroup";
import { dayType, exerciseType } from "../../../models/exercise";
import {
  HiOutlineClock,
  HiOutlineFastForward,
  HiOutlineRefresh,
} from "react-icons/hi";
import { Container, Button } from "./styles";

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
      <section className="inner-hero-section">
        <div className="title-section">
          <div className="top-side">
            <span className="sub-title">Dia</span>
            <span>{workOutData?.number?.toString().padStart(2, "0")}</span>
          </div>

          <div className="bottom-side">
            <h2>{workOutData?.muscle_group}</h2>
          </div>
        </div>

        <h1 className="decoration-number">
          {workOutData?.number?.toString().padStart(2, "0")}
        </h1>
      </section>

      <div className="list-container">
        {workOutData?.workout?.map((e: exerciseType, i: number) => (
          <ExerciseContainer data={e} key={i} />
        ))}
      </div>
    </Container>
  );
};

interface prop {
  data: exerciseType;
}

const ExerciseContainer = ({ data }: prop) => {
  const [focus, setFocus] = useState(false);

  return (
    <Button
      className="bottom-section"
      focus={focus}
      onClick={() => setFocus(!focus)}
    >
      <h5>{data.exercise}</h5>
      {data.observation && <p>{data.observation}</p>}

      <ul>
        <li>
          <HiOutlineFastForward />

          <span>
            {data.sets}x {focus && "Séries"}
          </span>
        </li>
        <li>
          <HiOutlineRefresh />
          <span>
            {data.repetition} {focus && "Repetições"}
          </span>
        </li>
        <li>
          <HiOutlineClock />
          <span>
            {data.time || 0}s {focus && "Descanso"}
          </span>
        </li>
      </ul>
    </Button>
  );
};

export default WorkOutInnerPage;
