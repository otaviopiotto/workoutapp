import { map } from "lodash";
import { useEffect } from "react";
import { UseFormRegister } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { exerciseType } from "../../models/exercise";
import Button from "../Button";
import { Container } from "./styles";

export type defaultValue = { sets?: string; reps?: string };

interface addNewProp {
  exercise_number: number;
  onDelete?: () => void;
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
      props.setValue(`exercise_${props.exercise_number}.${i}`, e);
    });
  }, []);

  useEffect(() => {
    const sets = props.watch(`exercise_${props.exercise_number}.sets`);
    const reps = props.watch(`exercise_${props.exercise_number}.repetition`);

    if (sets || reps) {
      props.setDefaultValue({
        sets,
        reps,
      });
    }
  }, [
    props.watch(`exercise_${props.exercise_number}.repetition`),
    props.watch(`exercise_${props.exercise_number}.sets`),
  ]);

  useEffect(() => {
    if (props.defaultValue) {
      props.setValue(
        `exercise_${props.exercise_number}.sets`,
        props.defaultValue?.sets
      );
      props.setValue(
        `exercise_${props.exercise_number}.repetition`,
        props.defaultValue?.reps
      );
    }
  }, []);

  return (
    <Container>
      <input
        style={{ display: "none" }}
        value={props.data.id}
        {...props.register?.(`exercise_${props.exercise_number}.id`)}
      />
      <input
        placeholder="Exercício"
        {...props.register?.(`exercise_${props.exercise_number}.exercise`)}
      />
      <input
        placeholder="Série"
        {...props.register?.(`exercise_${props.exercise_number}.sets`)}
      />
      <input
        placeholder="Rep"
        {...props.register?.(`exercise_${props.exercise_number}.repetition`)}
      />
      <Button
        buttonStyle="Secondary"
        style={{ padding: "2px", height: "fit-content", borderRadius: "99px" }}
        onClick={props.onDelete}
      >
        <AiOutlineClose />
      </Button>
    </Container>
  );
};

export default AddNewWorkOut;
