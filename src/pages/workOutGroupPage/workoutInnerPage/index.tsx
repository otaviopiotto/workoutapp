import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";
import { useGroup } from "../../../hooks/exerciseGroup";
import { dayType, exerciseType } from "../../../models/exercise";
import {
  HiOutlineClock,
  HiOutlineFastForward,
  HiOutlineRefresh,
} from "react-icons/hi";

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
          <div className="bottom-section" key={i}>
            <h5>{e.exercise}</h5>
            {e.observation && <p>{e.observation}</p>}

            <ul>
              <li>
                <HiOutlineFastForward />

                <span>{e.sets}x</span>
              </li>
              <li>
                <HiOutlineRefresh />
                <span>{e.repetition}</span>
              </li>
              <li>
                <HiOutlineClock />
                <span>{e.time || 0}s</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkOutInnerPage;
