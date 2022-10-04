import { useEffect, useRef, useState } from "react";
import {
  Control,
  useFieldArray,
  UseFieldArrayRemove,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { dayType, exerciseType } from "../../../models/exercise";
import AddNewWorkOut from "../../addNewWorkout/addNewWorkout";
import Button from "../../Button";
import { Modal, ModalContent } from "../../radixModalComponent";
import {
  HiOutlineCheck,
  HiOutlineDuplicate,
  HiOutlinePlus,
  HiOutlineX,
  HiX,
} from "react-icons/hi";
import InputComponent from "../../formComponents/input";
import { inputProp } from "..";
import { Form } from "../styles";
import { DayContainer, ExerciseContainer } from "./styles";

interface DaysProp {
  data?: dayType;
  duplicateDay(data: any): void;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<inputProp>;
  watch: UseFormWatch<inputProp>;
  index: number;
  getValues: UseFormGetValues<inputProp>;
  setValue: UseFormSetValue<inputProp>;
  control: Control<inputProp, any>;
}

const defaultList = ["Exercícios", "Séries", "Reps", "Desc"];
const offList = ["Off", "Off", "Off", "Off"];

const DaysContainer = ({
  data,
  duplicateDay,
  watch,
  index,
  remove,
  control,
  register,
  setValue,
  getValues,
}: DaysProp) => {
  const [open, setOpen] = useState(
    watch(`days.${index}.muscle_group`) ? false : true
  );
  const containerRef = useRef(null as any);

  const defaultTitle = !getValues(`days.${index}.muscle_group`)
    ? `Dia ${index + 1} - Exercícios`
    : `Dia ${index + 1} - ${getValues(`days.${index}.muscle_group`)}`;

  useEffect(() => {
    if (!getValues(`days.${index}.muscle_group`)) setOpen(true);
  }, [open]);

  const handleOpenChange = () => {
    if (!getValues(`days.${index}.muscle_group`)) {
      setValue(`days.${index}.muscle_group`, "OFF");
      setOpen(false);
    } else {
      setOpen(!open);
    }
  };

  return (
    <>
      <Modal open={open} onOpenChange={handleOpenChange}>
        <ModalContent title={defaultTitle}>
          <AddExercises
            {...{
              control,
              nestedIndex: index,
              register,
              getValues,
              setValue,
              watch,
              onClose: handleOpenChange,
            }}
          />
        </ModalContent>
      </Modal>
      <DayContainer ref={containerRef}>
        <Button
          buttonStyle="Text"
          style={{ padding: 0, width: "90%", flex: 0.98 }}
          onClick={() => setOpen(true)}
        >
          <article className="days-container">
            <div className="left-side">
              <div className="day-container">
                <h1>{(index + 1).toString().padStart(2, "0")}</h1>
              </div>
              <div className="exercise-list">
                <div className="top-side">
                  <h3>{watch(`days.${index}.muscle_group`)}</h3>
                </div>

                <section className="exercise-bottom">
                  <ul className="list-header">
                    {(watch(`days.${index}.muscle_group`)
                      ?.toLowerCase()
                      .includes("off")
                      ? offList
                      : defaultList
                    ).map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>

                  {watch(`days.${index}.workout`)?.map(
                    (e: exerciseType, i: number) => (
                      <ul key={i}>
                        <li>
                          <span>{e.exercise}</span>
                        </li>
                        <li>{e.sets}x</li>
                        <li>{e.repetition}</li>
                        <li>{e.time}s</li>
                      </ul>
                    )
                  )}
                </section>
              </div>
            </div>
          </article>
        </Button>

        <div className="right-side">
          <Button buttonStyle="Text" onClick={() => remove(index)}>
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
  register: UseFormRegister<inputProp>;
  watch: UseFormWatch<inputProp>;
  setValue: UseFormSetValue<inputProp>;
  nestedIndex: number;
  getValues: UseFormGetValues<inputProp>;
  control: Control<inputProp, any>;
}

const AddExercises = ({
  onClose,
  nestedIndex,
  control,
  register,
  setValue,
  watch,
  getValues,
}: addProps) => {
  const { fields, append, remove } = useFieldArray({
    name: `days.${nestedIndex}.workout`,
    control,
  });

  const createExercise = () => {
    append({
      sets: getValues(
        `days.${nestedIndex}.workout[${fields.length - 1}].sets` as any
      ),
      repetition: getValues(
        `days.${nestedIndex}.workout[${fields.length - 1}].repetition` as any
      ),
      time: getValues(
        `days.${nestedIndex}.workout[${fields.length - 1}].time` as any
      ),
    });
  };

  return (
    <ExerciseContainer>
      <Form
        id="add-exercise"
        style={{
          gap: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <InputComponent
          label="Dia de:"
          style={{ gap: 0, height: "fit-content" }}
          register={{ ...register(`days.${nestedIndex}.muscle_group`) }}
        />

        <section className="add-exercise-section">
          <ul
            className="add-new"
            style={{ display: !fields.length ? "none" : "flex" }}
          >
            {fields.map((e: exerciseType | any, i: number) => (
              <AddNewWorkOut
                key={i}
                index={i}
                parent={`days.${nestedIndex}`}
                {...{
                  register,
                  setValue,
                  watch,
                  onDelete: remove,
                }}
              />
            ))}
          </ul>

          {!fields.length ? (
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
          <Button buttonStyle="Text" onClick={onClose}>
            <HiX />
          </Button>
          <Button buttonStyle="Text" onClick={() => createExercise()}>
            <HiOutlinePlus />
          </Button>
          <Button buttonStyle="Text" onClick={onClose} form="add-exercise">
            <HiOutlineCheck />
          </Button>
        </footer>
      </Form>
    </ExerciseContainer>
  );
};

export default DaysContainer;
