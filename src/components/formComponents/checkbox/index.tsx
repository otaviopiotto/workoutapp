import { GoCheck } from "react-icons/go";
import { CSSProperties } from "styled-components";
import { Container, CheckboxRoot, CheckboxIndication } from "./styles";

interface InputProps {
  label?: string;
  name?: string;
  id: string;
  disabled?: boolean;
  error?: string;
  register?: any;
  maxWidth?: number;
  checked?: boolean;
  onCheckedChange?(value: boolean): void;
  readonly?: boolean;
  style?: CSSProperties | undefined;
}

const CheckBoxComponent = ({
  label,
  register,
  error,
  id,
  disabled,
  maxWidth,
  checked = false,
  onCheckedChange,
  readonly,
  style,
}: InputProps) => {
  return (
    <Container
      style={style}
      maxWidth={maxWidth || Math.ceil(label?.length * 17)}
      readonly={readonly}
    >
      <label htmlFor={id}>{label} </label>
      <CheckboxRoot
        id={id}
        defaultChecked={checked}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxIndication>
          <GoCheck />
        </CheckboxIndication>
      </CheckboxRoot>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default CheckBoxComponent;
