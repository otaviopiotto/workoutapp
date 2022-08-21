import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import Button from "../../components/Button";
import { useGroup } from "../../hooks/exerciseGroup";
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

const WorkOutPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [workOutData, setWorkOutData] = useState<GroupType>(null as any);
  const navigate = useNavigate();
  const outlet = useOutlet();
  const { group } = useGroup();
  const { state }: any = useLocation();

  useEffect(() => {
    const filterGroup = group.filter((e) => e.id === state);
    setWorkOutData(filterGroup[0]);
  }, [group, state]);

  return (
    <>
      <Modal open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
        <ModalContent title="Deletar" position="center">
          <DeleteModal
            id={workOutData?.id}
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

            {!outlet && (
              <div className="edit-buttons">
                <Button
                  buttonStyle="Text"
                  onClick={() =>
                    navigate("/novo-grupo", {
                      state: workOutData?.id,
                    })
                  }
                >
                  <HiOutlinePencil />
                </Button>
                <Button buttonStyle="Text" onClick={() => setOpenModal(true)}>
                  <HiOutlineTrash />
                </Button>
              </div>
            )}
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
                    <span>Descrição</span>
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
          <div className="top-side">
            <h1>{data?.number?.toString().padStart(2, "0")}</h1>

            <span className="icon-container">
              <HiOutlineClipboardList fontSize={12} />{" "}
              {data?.workout?.length || 0}{" "}
              {data?.workout?.length > 1 ? "Treinos" : "Treino"}
            </span>
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
