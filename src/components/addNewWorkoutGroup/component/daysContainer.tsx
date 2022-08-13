import { assign, forEach, map } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { dayType, exerciseType } from "../../../models/exercise";
import AddNewWorkOut from "../../addNewWorkout/addNewWorkout";
import Button from "../../Button";
import SelectComponent from "../../formComponents/select";
import { Modal, ModalContent } from "../../radixModalComponent";
import { Form } from "../styles";
import { defaultValue } from "../../../components/addNewWorkout/addNewWorkout";
import { DayContainer, ExerciseContainer } from "./styles";

interface DaysProp {
  day?: number;
  data?: any;
  onDelete?(id: string): void;
  updateDay(data: any): void;
  edditing?: boolean;
}

const select = [
  {
    value: "OFF",
    label: "OFF",
  },
  {
    value: "Peito e Tríceps",
    label: "Peito e Tríceps",
  },

  {
    value: "Costas e Bíceps",
    label: "Costas e Bíceps",
  },

  {
    value: "Pernas e Ombros",
    label: "Pernas e Ombros",
  },
  {
    value: "Superiores",
    label: "Superiores",
  },
  {
    value: "Inferiores",
    label: "Inferiores",
  },
];

const defaultList = ["Exercícios", "Séries", "Repetições"];
const offList = ["Off", "Off", "Off"];

const DaysContainer = ({
  data,
  day,
  onDelete,
  updateDay,
  edditing,
}: DaysProp) => {
  const [open, setOpen] = useState(edditing ? false : true);

  const defaultTitle = !data?.muscle_group
    ? `Dia ${day} - Exercícios`
    : `Dia ${day} - ${data.muscle_group}`;

  useEffect(() => {
    if (!data?.muscle_group) setOpen(true);
  }, [open]);

  return (
    <>
      <Modal open={open} onOpenChange={() => setOpen(!open)}>
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
      <DayContainer>
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
        <Button
          buttonStyle="Text"
          className="delete-button"
          onClick={() => onDelete?.(data.id)}
        >
          <AiOutlineClose fontSize={20} />
        </Button>
      </DayContainer>
    </>
  );
};

interface addProps extends DaysProp {
  onClose: () => void;
}

const AddExercises = ({ data: dayData, updateDay, onClose }: addProps) => {
  const [loading, setLoading] = useState(true);
  const [muscleGroup, setMuscleGroup] = useState<string>(select[0].value);
  const [exercises, setExercises] = useState<exerciseType | any>([]);
  const [defaultValue, setDefaultValue] = useState<defaultValue>();

  const { handleSubmit, register, unregister, setValue, watch } = useForm({});

  const onAdd = (data: any) => {
    const workout = map(data, (e) => e);
    const formatData = {
      muscle_group: muscleGroup,
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
      `exercise_${exercises.length - 1}`,
      `sets_${exercises.length - 1}`,
      `repetition_${exercises.length - 1}`,
    ];

    unregister(registerNames);
    const filterDay = exercises.filter((e: dayType) => e.id !== id);
    setExercises(filterDay);
  };

  useEffect(() => {
    if (dayData?.muscle_group) {
      setMuscleGroup(dayData.muscle_group);
      setLoading(false);
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
      <Form onSubmit={handleSubmit(onAdd)} id="add-exercise" style={{ gap: 0 }}>
        {!loading && (
          <SelectComponent
            options={select}
            defaultValue={muscleGroup}
            label="Dia de:"
            preSelected
            onValueChange={(value) => setMuscleGroup(value)}
          />
        )}

        <section className="add-exercise-section">
          <ul
            className="list-header"
            style={{ display: !exercises.length ? "none" : "flex" }}
          >
            {exercises.length
              ? defaultList.map((e, i) => <li key={i}>{e}</li>)
              : null}
          </ul>
          <ul
            className="add-new"
            style={{ display: !exercises.length ? "none" : "flex" }}
          >
            {exercises.map((e: exerciseType | any, i: number) => (
              <AddNewWorkOut
                {...{
                  setDefaultValue,
                  defaultValue,
                  register,
                  setValue,
                  watch,
                }}
                onDelete={() => deleteExercise(e.id)}
                key={i}
                exercise_number={i}
                data={e}
              />
            ))}
          </ul>
          {muscleGroup !== "OFF" && (
            <Button
              buttonStyle="Secondary"
              style={{
                padding: "8px",
                borderRadius: "99px",
                margin: "10px auto",
              }}
              onClick={() => createExercise()}
            >
              <AiOutlinePlus />
            </Button>
          )}
          <Button
            buttonStyle="Primary"
            type="submit"
            form="add-exercise"
            style={{ marginTop: "20px" }}
          >
            Salvar
          </Button>
        </section>
      </Form>
    </ExerciseContainer>
  );
};

export default DaysContainer;
