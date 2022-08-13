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

  return (
    <Container>
      <input
        style={{ display: "none" }}
        value={props.data.id}
        {...props.register?.(`exercise_${props.data?.id}.id`)}
      />
      <input
        placeholder="Exercício"
        {...props.register?.(`exercise_${props.data?.id}.exercise`)}
      />
      <input
        placeholder="Série"
        {...props.register?.(`exercise_${props.data?.id}.sets`)}
      />
      <input
        placeholder="Rep"
        {...props.register?.(`exercise_${props.data?.id}.repetition`)}
      />
      <Button
        buttonStyle="Secondary"
        style={{ padding: "2px", height: "fit-content", borderRadius: "99px" }}
        onClick={() => props.onDelete?.(props?.data?.id)}
      >
        <AiOutlineClose />
      </Button>
    </Container>
  );
};

export default AddNewWorkOut;
