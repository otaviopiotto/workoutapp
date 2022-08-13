import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { CSSProperties } from "styled-components";
import {
  Container,
  Separator,
  StyledContent,
  StyledItem,
  StyledItemText,
  StyledRoot,
  StyledSelectedValue,
  StyledTrigger,
  StyledViewPort,
  ScrollUpButton,
  ScrollDownButton,
} from "./styles";

interface SelectProps {
  label?: string;
  preSelected?: boolean;
  options: {
    label: string;
    value: any;
  }[];
  defaultValue?: string;
  onValueChange?(value: string): void;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  style?: CSSProperties | undefined;
}

const defaultOpt = {
  value: null,
  label: "Selecionar",
};

const SelectComponent = ({
  options,
  label,
  onValueChange,
  defaultValue,
  preSelected,
  readOnly,
  required,
  error,
  disabled,
  style,
}: SelectProps) => {
  const SelectDefaultValue = !preSelected
    ? defaultValue || defaultOpt?.value
    : defaultValue || options?.[0]?.value;

  const selectOptions = !preSelected ? [defaultOpt, ...options] : options;

  return (
    <Container
      disabled={disabled}
      readOnly={readOnly}
      style={style}
      required={required}
    >
      {label && <label>{label}</label>}

      <StyledRoot
        defaultValue={SelectDefaultValue}
        onValueChange={onValueChange}
      >
        <StyledTrigger error={error} disabled={disabled}>
          <StyledSelectedValue />
          <AiOutlineDown />
        </StyledTrigger>
        <StyledContent>
          <ScrollUpButton>
            <AiOutlineUp />
          </ScrollUpButton>
          <StyledViewPort>
            {selectOptions.map((itens, index: number) => (
              <span key={index}>
                <StyledItem value={itens.value}>
                  <StyledItemText>{itens.label}</StyledItemText>
                </StyledItem>
                {index !== selectOptions.length - 1 && <Separator />}
              </span>
            ))}
          </StyledViewPort>
          <ScrollDownButton>
            <AiOutlineDown />
          </ScrollDownButton>
        </StyledContent>
      </StyledRoot>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default SelectComponent;
