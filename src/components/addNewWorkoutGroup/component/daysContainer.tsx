import { useEffect, useRef, useState } from "react";
import { map } from "lodash";
import { useForm } from "react-hook-form";
import { dayType, exerciseType } from "../../../models/exercise";
import AddNewWorkOut from "../../addNewWorkout/addNewWorkout";
import Button from "../../Button";
import { Modal, ModalContent } from "../../radixModalComponent";
import { defaultValue } from "../../../components/addNewWorkout/addNewWorkout";
import { Form } from "../styles";
import { DayContainer, ExerciseContainer } from "./styles";
import { HiOutlineDuplicate, HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import InputComponent from "../../formComponents/input";

interface DaysProp {
  day: number;
  data?: dayType;
  onDelete?(id: string | number | undefined): void;
  updateDay(data: any): void;
  duplicateDay(data: any): void;
  setMoving(value: any): any;
  listLength: number;
}

const defaultList = ["Exercícios", "Séries", "Repetições"];
const offList = ["Off", "Off", "Off"];

const DaysContainer = ({
  data,
  day,
  onDelete,
  updateDay,
  duplicateDay,
  setMoving,
  listLength,
}: DaysProp) => {
  const [open, setOpen] = useState(data?.muscle_group ? false : true);
  const [holdingAnim, setHoldingAnim] = useState(false);
  const containerRef = useRef(null as any);

  const defaultTitle = !data?.muscle_group
    ? `Dia ${day} - Exercícios`
    : `Dia ${day} - ${data.muscle_group}`;

  useEffect(() => {
    if (!data?.muscle_group) setOpen(true);
  }, [open]);

  let pos = { top: 0, y: 0 };
  let moveState: any = null;

  const mouseMoveHandler = (e: any) => {
    containerRef.current.style.zIndex = 2;
    const dx = e.changedTouches[0].clientY - pos.y;

    const pointerPosition = Math.round(dx / 100);

    if (dx > -70 && dx < 70) {
      containerRef.current.style.top = dx + "px";
      containerRef.current.style.order = day - 1;
    }

    if (dx < 0) {
      const downToArr = pointerPosition - day;
      const position = downToArr < 0 ? 0 : downToArr;

      if (dx < -80) {
        containerRef.current.style.order = position;

        containerRef.current.style.top = dx + 20 + "px";

        moveState = {
          childPosition: day - 1,
          arrayP: position,
        };
      }
    } else {
      const upToArr = pointerPosition + day;
      const position = upToArr > listLength - 1 ? listLength - 1 : upToArr;

      if (dx > 80) {
        containerRef.current.style.order = position;

        containerRef.current.style.top = dx - 20 + "px";

        moveState = {
          childPosition: day - 1,
          arrayP: position,
        };
      }
    }
  };

  const mouseDownHandler = (e: any) => {
    if (containerRef.current.parentElement.clientHeight > 89 * 2) {
      setHoldingAnim(true);
      pos = {
        top: containerRef?.current?.scrollTop,
        y: e.changedTouches[0].clientY,
      };
      document.addEventListener("touchmove", mouseMoveHandler);
      document.addEventListener("touchend", mouseUpHandler);
    }
  };

  const mouseUpHandler = () => {
    setHoldingAnim(false);
    setMoving(moveState);
    containerRef.current.style.top = 0;
    containerRef.current.style.zIndex = 0;
    containerRef.current.style.order = "unset";
    document.removeEventListener("touchmove", mouseMoveHandler);
    document.removeEventListener("touchend", mouseUpHandler);
  };

  const handleOpenChange = () => {
    setOpen(!open);

    if (open) {
      if (!data?.muscle_group) {
        const formatData = {
          muscle_group: "OFF",
          number: day,
          workout: [],
        };

        updateDay({ ...data, ...formatData });
      }
      setOpen(false);
    }
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onOpenChange={handleOpenChange}>
        <ModalContent title={defaultTitle}>
          <AddExercises
            {...{
              data,
              day,
              onClose: () => setOpen(false),
              updateDay,
            }}
          />
        </ModalContent>
      </Modal>
      <DayContainer ref={containerRef} hold={holdingAnim}>
        <Button
          buttonStyle="Text"
          style={{ padding: 0, width: "100%", flex: 0.98 }}
          onClick={() => setOpen(true)}
        >
          <article className="days-container">
            <div className="left-side">
              <div className="day-container">
                <h1>{day?.toString().padStart(2, "0")}</h1>
              </div>
              <div className="exercise-list">
                <div className="top-side">
                  <h3>{data?.muscle_group}</h3>
                </div>

                <section className="exercise-bottom">
                  <ul className="list-header">
                    {(data?.muscle_group?.toLowerCase().includes("off")
                      ? offList
                      : defaultList
                    ).map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>

                  {data?.workout?.map((e: exerciseType, i: number) => (
                    <ul key={i}>
                      <li>{e.exercise}</li>
                      <li>{e.sets}</li>
                      <li>{e.repetition}</li>
                    </ul>
                  ))}
                </section>
              </div>
            </div>
          </article>
        </Button>

        <div className="right-side">
          {/* <Button buttonStyle="Text" onTouchStart={mouseDownHandler}>
            <HiOutlineViewList fontSize={20} />
          </Button> */}
          <Button buttonStyle="Text" onClick={() => onDelete?.(data?.id)}>
            <HiOutlineX fontSize={20} />
          </Button>
          <Button buttonStyle="Text" onClick={() => duplicateDay(data)}>
            <HiOutlineDuplicate fontSize={20} />
          </Button>
        </div>
      </DayContainer>
    </>
  );
};

interface addProps {
  onClose: () => void;
  data: any;
  updateDay(data: any): void;
  day: number;
}

const AddExercises = ({ data: dayData, updateDay, onClose, day }: addProps) => {
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState<exerciseType | any>([]);
  const [defaultValue, setDefaultValue] = useState<defaultValue>();

  const { handleSubmit, register, unregister, setValue, watch, resetField } =
    useForm({});

  const onAdd = (data: any) => {
    const muscle_group = data.muscle_group;

    delete data.muscle_group;
    const workout = map(data, (e) => e);
    const formatData = {
      muscle_group,
      number: day,
      workout,
    };
    updateDay({ ...dayData, ...formatData });
    onClose();
  };

  const createExercise = () => {
    const newExercise = {
      id: (Math.random() * (100000 - 1) + 1).toFixed(0),
    };
    setExercises([...exercises, newExercise]);
  };

  const deleteExercise = (id: number | string) => {
    const registerNames = [
      `exercise_${id}.id`,
      `exercise_${id}.exercise`,
      `exercise_${id}.sets`,
      `exercise_${id}.repetition`,
    ];

    const filterDay = exercises.filter((e: dayType) => e.id !== id);
    map(registerNames, (value) => resetField(value));
    unregister([`exercise_${id}`, ...registerNames]);
    setExercises(filterDay);
  };

  useEffect(() => {
    if (dayData?.muscle_group) {
      setValue("muscle_group", dayData.muscle_group);
      setLoading(false);
    } else {
      setValue("muscle_group", "OFF");
    }
    if (!dayData?.workout) {
      setLoading(false);
      return;
    }

    const newExercise = dayData?.workout?.map((e: exerciseType) => ({
      ...e,
    }));

    setExercises(newExercise);
  }, [dayData]);

  return (
    <ExerciseContainer>
      <Form
        onSubmit={handleSubmit(onAdd)}
        id="add-exercise"
        style={{
          gap: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        {!loading && (
          <InputComponent
            label="Dia de:"
            style={{ gap: 0, height: "fit-content" }}
            register={{ ...register("muscle_group") }}
          />
        )}

        <section className="add-exercise-section">
          <ul
            className="add-new"
            style={{ display: !exercises.length ? "none" : "flex" }}
          >
            {exercises.map((e: exerciseType | any, i: number) => (
              <AddNewWorkOut
                onDelete={deleteExercise}
                data={e}
                key={i}
                {...{
                  setDefaultValue,
                  defaultValue,
                  register,
                  setValue,
                  watch,
                }}
              />
            ))}
          </ul>

          {!exercises.length ? (
            <Button
              buttonStyle="Secondary"
              onClick={() => createExercise()}
              className="add-new-exercise"
            >
              <HiOutlinePlus />
            </Button>
          ) : null}
        </section>
        <footer className="modal-footer">
          <Button buttonStyle="Secondary" onClick={() => createExercise()}>
            <HiOutlinePlus />
          </Button>
          <Button buttonStyle="Primary" type="submit" form="add-exercise">
            Salvar
          </Button>
        </footer>
      </Form>
    </ExerciseContainer>
  );
};

export default DaysContainer;
