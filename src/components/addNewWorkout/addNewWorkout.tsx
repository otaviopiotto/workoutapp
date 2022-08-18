import { map } from "lodash";
import { useEffect } from "react";
import { UseFormRegister } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiOutlineTrash,
} from "react-icons/hi";
import { exerciseType } from "../../models/exercise";
import Button from "../Button";
import { Container } from "./styles";

export type defaultValue = { sets?: string; reps?: string };

interface addNewProp {
  onDelete?(id: number | string | undefined): void;
  register?: UseFormRegister<any>;
  setValue: any;
  data: exerciseType;
  setDefaultValue(value: defaultValue): void;
  defaultValue: defaultValue | undefined;
  watch: any;
}

const AddNewWorkOut = ({ ...props }: addNewProp) => {
  useEffect(() => {
    map(props.data, (e, i) => {
      props.setValue(`exercise_${props.data?.id}.${i}`, e);
    });
  }, []);

  useEffect(() => {
    const sets = props.watch(`exercise_${props.data?.id}.sets`);
    const reps = props.watch(`exercise_${props.data?.id}.repetition`);

    if (sets || reps) {
      props.setDefaultValue({
        sets,
        reps,
      });
    }
  }, [
    props.watch(`exercise_${props.data?.id}.repetition`),
    props.watch(`exercise_${props.data?.id}.sets`),
  ]);

  useEffect(() => {
    if (props.defaultValue) {
      props.setValue(
        `exercise_${props.data?.id}.sets`,
        props.defaultValue?.sets
      );
      props.setValue(
        `exercise_${props.data?.id}.repetition`,
        props.defaultValue?.reps
      );
    }
  }, []);

  const handleSets = (value: boolean) => {
    const currentValue = Number(props.watch(`exercise_${props.data?.id}.sets`));

    if (value) {
      props.setValue(`exercise_${props.data?.id}.sets`, currentValue + 1);
    } else {
      props.setValue(
        `exercise_${props.data?.id}.sets`,
        currentValue === 0 ? 0 : currentValue - 1
      );
    }
  };

  return (
    <Container>
      <input
        style={{ display: "none" }}
        value={props.data.id}
        {...props.register?.(`exercise_${props.data?.id}.id`)}
      />

      <div className="input-container" style={{ gridColumn: "span 2" }}>
        <label htmlFor={`exercise-${props.data?.id}`}> Exercício</label>

        <input
          placeholder="Exercício"
          id={`exercise-${props.data?.id}`}
          {...props.register?.(`exercise_${props.data?.id}.exercise`)}
        />
      </div>
      <div className="input-container">
        <label htmlFor={`sets-${props.data?.id}`}> Séries</label>

        <div className="set-count">
          <button type="button" onClick={() => handleSets(false)}>
            <HiOutlineMinusSm />
          </button>
          <input
            placeholder="0"
            id={`sets-${props.data?.id}`}
            type="number"
            min="0"
            {...props.register?.(`exercise_${props.data?.id}.sets`)}
          />
          <button type="button" onClick={() => handleSets(true)}>
            <HiOutlinePlusSm />
          </button>
        </div>
      </div>

      <div className="input-container">
        <label htmlFor={`reps-${props.data?.id}`}> Repetição</label>

        <input
          placeholder="Rep"
          id={`reps-${props.data?.id}`}
          {...props.register?.(`exercise_${props.data?.id}.repetition`)}
        />
      </div>
      <Button
        buttonStyle="Text"
        className="delete-button"
        style={{ padding: "2px", height: "fit-content" }}
        onClick={() => props.onDelete?.(props?.data?.id)}
      >
        <HiOutlineTrash />
      </Button>
    </Container>
  );
};

export default AddNewWorkOut;
