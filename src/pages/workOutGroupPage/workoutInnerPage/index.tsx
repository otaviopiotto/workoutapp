import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dayType, exerciseType } from "../../../models/exercise";
import {
  HiOutlineClock,
  HiOutlineFastForward,
  HiOutlineRefresh,
} from "react-icons/hi";
import { Container, Button } from "./styles";
import { getQuery } from "../../../services/hooks/getQuery";

const WorkOutInnerPage = () => {
  const [workOutData, setWorkOutData] = useState<dayType>(null as any);
  const { state }: any = useLocation();

  const { data } = getQuery(`user/group/${state.groupId}`, [
    "group",
    state.groupId,
  ]);

  useEffect(() => {
    if (data) {
      const filterDay = data.days.filter((e: any) => e._id === state.id);
      setWorkOutData(filterDay[0]);
    }
  }, [data, state]);

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
            {data.sets}x {focus && <span className="anim-span">Séries</span>}
          </span>
        </li>
        <li>
          <HiOutlineRefresh />
          <span>
            {data.repetition}{" "}
            {focus && <span className="anim-span">Repetições</span>}
          </span>
        </li>
        <li>
          <HiOutlineClock />
          <span>
            {data.time || 0}s{" "}
            {focus && <span className="anim-span">Descanso</span>}
          </span>
        </li>
      </ul>
    </Button>
  );
};

export default WorkOutInnerPage;
