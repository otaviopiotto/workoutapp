import { map } from "lodash";
import { useEffect, useRef, useState } from "react";
import {
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiOutlineTrash,
} from "react-icons/hi";
import { inputProp } from "../addNewWorkoutGroup";
import { CardContainer } from "../addNewWorkoutGroup/styles";
import Button from "../Button";

export type defaultValue = { sets?: string; reps?: string; time?: string };

interface addNewProp {
  onDelete: UseFieldArrayRemove;
  register: UseFormRegister<inputProp>;
  index: number;
  watch: UseFormWatch<inputProp>;
  parent: string;
  setValue: UseFormSetValue<inputProp>;
}

const AddNewWorkOut = ({ parent, ...props }: addNewProp) => {
  const [deleteAnim, setDeleteAnim] = useState(false);
  const containerRef = useRef(null as unknown as HTMLLIElement);

  useEffect(() => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSets = (value: boolean) => {
    const currentValue = Number(
      props.watch(`${parent}.workout.${props.index}.sets` as any)
    );

    if (value) {
      props.setValue(
        `${parent}.workout.${props.index}.sets` as any,
        currentValue + 1
      );
    } else {
      props.setValue(
        `${parent}.workout.${props.index}.sets` as any,
        currentValue === 0 ? 0 : currentValue - 1
      );
    }
  };
  const handleRest = (value: boolean) => {
    const currentValue = Number(
      props.watch(`${parent}.workout.${props.index}.time` as any)
    );

    if (value) {
      props.setValue(
        `${parent}.workout.${props.index}.time` as any,
        currentValue + 5
      );
    } else {
      props.setValue(
        `${parent}.workout.${props.index}.time` as any,
        currentValue === 0 ? 0 : currentValue - 5
      );
    }
  };

  const handleDelete = () => {
    setDeleteAnim(true);
    setTimeout(() => {
      props.onDelete(props.index);
    }, 100);
  };

  return (
    <CardContainer ref={containerRef} deleteAnim={deleteAnim}>
      <div className="input-section">
        <div
          className="input-container"
          style={{ gridColumn: "span 3", marginBottom: "10px" }}
        >
          <label> Exercício</label>
          <input
            placeholder="Exercício"
            className="exercise-input"
            {...props.register?.(
              `${parent}.workout.${props.index}.exercise` as any
            )}
          />
        </div>
        <div className="input-container" style={{ gridColumn: "span 3" }}>
          <label> Observação</label>

          <input
            placeholder="Observação"
            {...props.register?.(
              `${parent}.workout.${props.index}.observation` as any
            )}
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
              {...props.register?.(
                `${parent}.workout.${props.index}.sets` as any
              )}
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
            {...props.register?.(
              `${parent}.workout.${props.index}.repetition` as any
            )}
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
              {...props.register?.(
                `${parent}.workout.${props.index}.time` as any
              )}
            />
            <button type="button" onClick={() => handleRest(true)}>
              <HiOutlinePlusSm />
            </button>
          </div>
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
    </CardContainer>
  );
};

export default AddNewWorkOut;
