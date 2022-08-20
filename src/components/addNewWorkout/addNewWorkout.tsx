import { map } from "lodash";
import { useEffect, useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiOutlineTrash,
} from "react-icons/hi";
import { exerciseType } from "../../models/exercise";
import Button from "../Button";
import { Container } from "./styles";

export type defaultValue = { sets?: string; reps?: string; time?: string };

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
  const [deleteAnim, setDeleteAnim] = useState(false);
  const containerRef = useRef(null as unknown as HTMLLIElement);

  useEffect(() => {
    const sets = props.watch(`exercise_${props.data?.id}.sets`);
    const reps = props.watch(`exercise_${props.data?.id}.repetition`);
    const time = props.watch(`exercise_${props.data?.id}.time`);

    if (sets || reps || time) {
      props.setDefaultValue({
        sets,
        reps,
        time,
      });
    }
  }, [
    props.watch(`exercise_${props.data?.id}.repetition`),
    props.watch(`exercise_${props.data?.id}.sets`),
    props.watch(`exercise_${props.data?.id}.time`),
  ]);

  useEffect(() => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });

    if (props.defaultValue) {
      props.setValue(
        `exercise_${props.data?.id}.sets`,
        props.defaultValue?.sets
      );
      props.setValue(
        `exercise_${props.data?.id}.repetition`,
        props.defaultValue?.reps
      );
      props.setValue(
        `exercise_${props.data?.id}.time`,
        props.defaultValue?.time
      );
    } else {
      props.setValue(`exercise_${props.data?.id}.sets`, 3);
      props.setValue(`exercise_${props.data?.id}.repetition`, 10);
      props.setValue(`exercise_${props.data?.id}.time`, 30);
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
  const handleRest = (value: boolean) => {
    const currentValue = Number(props.watch(`exercise_${props.data?.id}.time`));

    if (value) {
      props.setValue(`exercise_${props.data?.id}.time`, currentValue + 5);
    } else {
      props.setValue(
        `exercise_${props.data?.id}.time`,
        currentValue === 0 ? 0 : currentValue - 5
      );
    }
  };

  const handleDelete = () => {
    setDeleteAnim(true);
    setTimeout(() => {
      props.onDelete?.(props?.data?.id);
    }, 600);
  };

  useEffect(() => {
    if (Object.keys(props.data).length > 1) {
      map(props.data, (e, i) => {
        props.setValue(`exercise_${props.data?.id}.${i}`, e);
      });
    }
  }, []);

  return (
    <Container ref={containerRef} deleteAnim={deleteAnim}>
      <div className="input-section">
        <input
          style={{ display: "none" }}
          value={props.data.id}
          {...props.register?.(`exercise_${props.data?.id}.id`)}
        />

        <div className="input-container" style={{ gridColumn: "span 3" }}>
          <label> Exercício</label>

          <input
            placeholder="Exercício"
            {...props.register?.(`exercise_${props.data?.id}.exercise`)}
          />
        </div>

        <div className="input-container">
          <label> Séries</label>

          <div className="set-count">
            <button type="button" onClick={() => handleSets(false)}>
              <HiOutlineMinusSm />
            </button>
            <input
              placeholder="0"
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
          <label> Repetição</label>

          <input
            placeholder="Rep"
            {...props.register?.(`exercise_${props.data?.id}.repetition`)}
          />
        </div>

        <div className="input-container">
          <label> Descanso (s)</label>
          <div className="set-count">
            <button type="button" onClick={() => handleRest(false)}>
              <HiOutlineMinusSm />
            </button>
            <input
              placeholder="0"
              type="number"
              min="0"
              {...props.register?.(`exercise_${props.data?.id}.time`)}
            />
            <button type="button" onClick={() => handleRest(true)}>
              <HiOutlinePlusSm />
            </button>
          </div>
        </div>
        <div className="input-container" style={{ gridColumn: "span 3" }}>
          <label> Observação</label>

          <input
            placeholder="Observação"
            {...props.register?.(`exercise_${props.data?.id}.observation`)}
          />
        </div>
        <Button
          buttonStyle="Text"
          className="delete-button"
          style={{ padding: "2px", height: "fit-content" }}
          onClick={handleDelete}
        >
          <HiOutlineTrash />
        </Button>
      </div>
    </Container>
  );
};

export default AddNewWorkOut;
