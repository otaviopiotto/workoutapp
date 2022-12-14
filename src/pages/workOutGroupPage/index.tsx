import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import Button from "../../components/Button";
import { dayType, GroupType } from "../../models/exercise";
import { Container, DayContainer } from "./styles";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineClipboardList,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { Modal, ModalContent } from "../../components/radixModalComponent";
import DeleteModal from "./components/deleteModal";
import { getQuery } from "../../services/hooks/getQuery";

const WorkOutPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [workOutData, setWorkOutData] = useState<GroupType>(null as any);
  const navigate = useNavigate();
  const outlet = useOutlet();
  const { state }: any = useLocation();

  const { data } = getQuery(`user/group/${state}`, ["group", state], {
    enabled: !outlet,
  });

  useEffect(() => {
    if (data) {
      setWorkOutData(data);
    }
  }, [data, state]);

  return (
    <>
      <Modal open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
        <ModalContent title="Deletar" position="center">
          <DeleteModal
            id={workOutData?._id}
            onClose={() => setOpenModal(false)}
          />
        </ModalContent>
      </Modal>
      <Container>
        {!outlet && (
          <div className="decoration-lines">
            <span />
            <span />
            <span />
          </div>
        )}
        <header className="group-header">
          <div className="get-back-section">
            <div className="edit-buttons">
              <Button buttonStyle="Text" onClick={() => navigate(-1)}>
                <HiOutlineArrowNarrowLeft />
              </Button>
            </div>
          </div>
        </header>

        {outlet ? (
          <Outlet />
        ) : (
          <>
            <section className="hero-section">
              <div className="top-side">
                <h1>{workOutData?.title}</h1>
              </div>
              {workOutData?.description && (
                <div className="bottom-side">
                  <div className="left-side">
                    <span>Descri????o</span>
                  </div>

                  <p className="description">{workOutData?.description}</p>
                </div>
              )}
            </section>

            <ul className="workout-list">
              {workOutData &&
                workOutData?.days?.map((e, i: number) => (
                  <DayCard data={e} key={i} groupId={state} />
                ))}
            </ul>
          </>
        )}

        <footer>
          <div className="get-back-section">
            <Button buttonStyle="Text" onClick={() => navigate(-1)} animation>
              <HiOutlineArrowNarrowLeft />
            </Button>

            {!outlet && (
              <>
                <Button
                  buttonStyle="Text"
                  animation
                  onClick={() =>
                    navigate("/novo-grupo", {
                      state: workOutData?._id,
                    })
                  }
                >
                  <HiOutlinePencil />
                </Button>
                <Button
                  buttonStyle="Text"
                  onClick={() => setOpenModal(true)}
                  animation
                >
                  <HiOutlineTrash />
                </Button>
              </>
            )}
          </div>
        </footer>
      </Container>
    </>
  );
};

interface dayProps {
  groupId: string;
  data: dayType;
}

const DayCard = ({ data, groupId }: dayProps) => {
  const navigate = useNavigate();

  const hasWorkout = data?.muscle_group.toLowerCase().includes("off");

  const handleClickCard = () => {
    if (hasWorkout) return;

    navigate(`${data?._id}`, {
      state: {
        id: data._id,
        groupId,
      },
    });
  };

  return (
    <DayContainer dayOff={hasWorkout}>
      <Button
        buttonStyle="Text"
        style={{ padding: 0, width: "100%", display: "unset" }}
        onClick={handleClickCard}
      >
        <header>
          <div className="top-side">
            <h1>{data?.number?.toString().padStart(2, "0")}</h1>

            {!hasWorkout && (
              <span className="icon-container">
                <HiOutlineClipboardList fontSize={12} />{" "}
                {data?.workout?.length || 0}{" "}
                {(data?.workout?.length as number) > 1 ? "Treinos" : "Treino"}
              </span>
            )}
          </div>

          <div className="bottom-side">
            <span className="name">{data?.muscle_group}</span>
          </div>
        </header>
      </Button>
    </DayContainer>
  );
};

export default WorkOutPage;
