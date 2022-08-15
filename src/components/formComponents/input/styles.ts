import styled from "styled-components";

const errorColor = ({ theme }: any) => theme.colors.alert_failure;
const disabledColor = ({ theme }: any) => theme.colors.grey_100;
const disabledFontColor = ({ theme }: any) => theme.colors.grey_400;

interface ContainerProp {
  maxWidth?: number;
  minWidth?: number;
  required?: boolean;
}

export const Container = styled.div<ContainerProp>`
  width: 100%;
  min-width: ${(prop) => prop.minWidth || 10}px;
  label {
    display: block;
    margin-bottom: 8px;

    ${({ theme }) => theme.fonts.mulish.small_regular};
    color: ${({ theme }) => theme.colors.grey[500]};

    &::after {
      content: "*";
      display: ${(prop) => (!prop.required ? "none" : "inline-block")};
      color: red;
      margin-left: 4px;
      font-size: 18px;
    }
  }

  p {
    word-break: break-word;
    color: ${errorColor};
    ${({ theme }) => theme.fonts.mulish.small_regular};
  }
`;

interface InputProps {
  affix?: {
    prefix?: any;
    suffix?: any;
  };
  size: "Large" | "Medium" | "Small";
  error?: any;
  disabled?: boolean;
  isLoading?: boolean;
  passwordType?: boolean;
}

const containerSize = {
  Large: "40px",
  Medium: "34px",
  Small: "26px",
};

const inputPadding = {
  Large: "26px 12px",
  Medium: "5px 12px",
  Small: "0px 12px",
};

export const InputContainer = styled.div<InputProps>`
  width: 100%;
  height: ${(prop) => containerSize[prop.size]};
  display: flex;
  position: relative;
  background: ${(prop) => prop.disabled && disabledColor};
  border-radius: 8px;

  *,
  input {
    pointer-events: ${(prop) => prop.disabled && "none"};
    color: ${(prop) => prop.disabled && disabledFontColor} !important;
    fill: ${(prop) => prop.disabled && disabledFontColor};
  }

  .prefix-container,
  .sufix-container {
    width: 32px;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.fonts.mulish.small_regular}
    color:${({ theme }) => theme.colors.grey[800]};
    svg {
      fill: rgba(0, 0, 0, 0.85);
    }
  }

  .sufix-container {
    right: 5px;
  }

  input {
    width: 100%;
    ${({ theme }) => theme.fonts.mulish.body_regular};
    color: ${({ theme }) => theme.colors.grey[500]};
    padding: ${(prop) => inputPadding[prop.size]};
    padding-left: ${(prop) => prop?.affix?.prefix && "32px"};
    padding-right: ${(prop) =>
      (prop?.affix?.suffix || prop.passwordType) && "32px"};
    border-radius: 8px;
    border: 1px solid
      ${(props) =>
        props.error ? errorColor : ({ theme }) => theme.colors.grey[600]};
    position: relative;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue[600]};
      box-shadow: 0px 0px 0px 2px rgba(24, 144, 255, 0.2);
    }

    &[type="color"] {
      -webkit-appearance: none;
      border: none;
      width: 52px;
      height: 100%;
    }
    &[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    &[type="color"]::-webkit-color-swatch {
      border: 1px solid ${(props) => (props.error ? errorColor : "#e0e0e0")};
    }
  }

  .see-pass-btn {
    cursor: pointer;
    width: 16px;
    position: absolute;
    top: 10px;
    right: 14px;
    svg {
      font-size: 16px;
      fill: ${({ theme }) => theme.colors.grey[400]};
    }
  }
`;
