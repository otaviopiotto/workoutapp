import { GoCheck } from "react-icons/go";
import { RadioRoot, RadioIndication, Radio, Container } from "./styles";

interface radioGroupProp {
  flexDirection?: "column" | "row";
  onValueChange?(value: any): void;
  defaultValue?: any;
  options: {
    label: string;
    value: any;
    id?: string | number;
  }[];
}

const RadioGroupComponent = ({
  onValueChange,
  options,
  defaultValue,
  flexDirection = "row",
}: radioGroupProp) => {
  return (
    <>
      <RadioRoot
        defaultValue={defaultValue || options[0].value}
        onValueChange={onValueChange}
        flexDirection={flexDirection}
      >
        {options.map((e, i) => (
          <Container flexDirection={flexDirection}>
            <label htmlFor={i.toString()}>{e.label}</label>
            <Radio value={e.value} id={i.toString()} key={i}>
              <RadioIndication>
                <GoCheck />
              </RadioIndication>
            </Radio>
          </Container>
        ))}
      </RadioRoot>
    </>
  );
};

export default RadioGroupComponent;
