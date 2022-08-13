import styled from "styled-components";

const errorColor = ({ theme }: any) => theme.colors.alert_failure;
const disabledColor = ({ theme }: any) => theme.colors.grey_300;
const disabledFontColor = ({ theme }: any) => theme.colors.grey_400;

interface RadioProps {
  checkedProp: any;
}

export const RadioRoot = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    display: block;
    ${({ theme }) => theme.fonts.mulish.small_regular}
    color:${({ theme }) => theme.colors.cold_grey_800};
  }

  p {
    color: ${errorColor};
    ${({ theme }) => theme.fonts.mulish.small_regular}
  }

  .radio-hidden {
    position: absolute;
    visibility: hidden;
  }

  cursor: pointer;
`;

export const RadioIndication = styled.span<RadioProps>`
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.checkedProp
      ? ({ theme }) => theme.colors.blue_800
      : ({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.blue_800};
  border-radius: 2px;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

interface InputProps {
  error?: any;
  disabled?: boolean;
  passwordType?: boolean;
}

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
