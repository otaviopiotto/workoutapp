import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

const errorColor = ({ theme }: any) => theme.colors.alert_failure;
const disabledColor = ({ theme }: any) => theme.colors.grey_300;
const disabledFontColor = ({ theme }: any) => theme.colors.grey_400;

interface ContainerProps {
  maxWidth?: number;
  readonly?: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: ${(prop) => prop.maxWidth || 200}px;
  min-width: ${(prop) => (prop.maxWidth ? 0 : 100)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  pointer-events: ${(prop) => prop.readonly && "none"};
  label {
    cursor: pointer;
    display: block;
    ${({ theme }) => theme.fonts.mulish.small_regular};
    color: ${({ theme }) => theme.colors.cold_grey_800};
  }

  p {
    color: ${errorColor};
    ${({ theme }) => theme.fonts.mulish.small_regular}
  }
`;

interface InputProps {
  error?: any;
  disabled?: boolean;
  passwordType?: boolean;
}

export const CheckboxRoot = styled(Checkbox.Root)`
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.blue_800};
  border-radius: 2px;
  cursor: pointer;
  padding: 0;

  &[aria-checked="true"] {
    background: ${({ theme }) => theme.colors.blue_800};
  }
`;

export const CheckboxIndication = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const InputContainer = styled.div<InputProps>`
  width: 100%;
  display: flex;
  position: relative;
  background: ${(prop) => prop.disabled && disabledColor};
  border-radius: 8px;

  * {
    pointer-events: ${(prop) => prop.disabled && "none"};
    color: ${(prop) => prop.disabled && disabledFontColor};
    fill: ${(prop) => prop.disabled && disabledFontColor};
  }

  .see-pass-btn {
    cursor: pointer;
    width: 16px;
    position: absolute;
    top: 10px;
    right: 14px;
    svg {
      font-size: 16px;
      fill: ${({ theme }) => theme.colors.grey_400};
    }
  }
`;
