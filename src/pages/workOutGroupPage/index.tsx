import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import Button from "../../components/Button";
import { useGroup } from "../../hooks/exerciseGroup";
import { GroupType } from "../../models/exercise";
import { Container, DayContainer } from "./styles";
import {
  AiOutlineArrowLeft,
  AiOutlineClose,
  AiOutlineEdit,
} from "react-icons/ai";

const WorkOutPage = () => {
  const [workOutData, setWorkOutData] = useState<GroupType>(null as any);
  const navigate = useNavigate();
  const outlet = useOutlet();
  const { group, deleteGroup } = useGroup();
  const { state }: any = useLocation();

  useEffect(() => {
    const filterGroup = group.filter((e) => e.id === state);

    setWorkOutData(filterGroup[0]);
  }, [group, state]);

  return (
    <Container>
      {!outlet && (
        <header className={!outlet ? "group-header" : ""}>
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

            <div className="edit-buttons">
              <Button
                buttonStyle="Text"
                onClick={() =>
                  navigate("/novo-grupo", {
                    state: workOutData?.id,
                  })
                }
                style={{
                  padding: 0,
                  fontSize: "16px",
                  color: "#000312",
                }}
              >
                <AiOutlineEdit />
              </Button>
              <Button
                buttonStyle="Text"
                style={{
                  padding: 0,
                  fontSize: "16px",
                  color: "#000312",
                }}
                onClick={() => deleteGroup(workOutData.id)}
              >
                <AiOutlineClose />
              </Button>
            </div>
          </div>

          <div className="title-section">
            <span>Título do Grupo</span>
            <h1>{workOutData?.title}</h1>
          </div>

          <p className="description">{workOutData?.description}</p>
        </header>
      )}

      {outlet ? (
        <Outlet />
      ) : (
        <ul className="workout-list">
          {workOutData &&
            workOutData?.days?.map((e, i: number) => (
              <DayCard data={e} key={i} groupId={state} />
            ))}
        </ul>
      )}
    </Container>
  );
};

interface dayProps {
  groupId: string;
  data: any;
}

const DayCard = ({ data, groupId }: dayProps) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    if (data?.muscle_group.toLowerCase().includes("off")) return;

    navigate(`${data?.muscle_group}`, {
      state: {
        id: data.id,
        groupId,
      },
    });
  };

  return (
    <DayContainer>
      <Button
        buttonStyle="Text"
        style={{ padding: 0, width: "100%", display: "unset" }}
        onClick={handleClickCard}
      >
        <header>
          <h1>{data?.number?.toString().padStart(2, "0")}</h1>
          <span>{data?.muscle_group}</span>
        </header>
      </Button>
    </DayContainer>
  );
};

export default WorkOutPage;
