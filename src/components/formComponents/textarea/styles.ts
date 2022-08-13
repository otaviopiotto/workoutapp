import styled from "styled-components";

const errorColor = ({ theme }: any) => theme.colors.alert_failure;
const disabledColor = ({ theme }: any) => theme.colors.grey_300;
const disabledFontColor = ({ theme }: any) => theme.colors.grey_400;

interface ContainerProp {
  maxWidth?: number;
  minWidth?: number;
}

export const Container = styled.div<ContainerProp>`
  width: 100%;
  max-width: ${(prop) => prop.maxWidth || 9999}px;
  min-width: ${(prop) => prop.minWidth || 10}px;
  label {
    display: block;
    margin-bottom: 8px;

    ${({ theme }) => theme.fonts.mulish.small_regular}
    color:${({ theme }) => theme.colors.cold_grey_800};
  }

  p {
    color: ${errorColor};
    ${({ theme }) => theme.fonts.mulish.small_regular}
  }
`;

interface InputProps {
  error?: any;
  disabled?: boolean;
}

export const TextAreaContainer = styled.div<InputProps>`
  width: 100%;
  min-height: 120px;
  height: auto;
  display: flex;
  background: ${(prop) => prop.disabled && disabledColor};
  border-radius: 8px;

  * {
    pointer-events: ${(prop) => prop.disabled && "none"};
    color: ${(prop) => prop.disabled && disabledFontColor};
  }

  textarea {
    width: 100%;
    ${({ theme }) => theme.fonts.mulish.small_regular};
    color: ${({ theme }) => theme.colors.grey[500]};

    padding: 5px 12px;
    border-radius: 8px;
    border: 1px solid
      ${(props) =>
        props.error ? errorColor : ({ theme }) => theme.colors.grey[600]};

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue[600]};
      box-shadow: 0px 0px 0px 2px rgba(24, 144, 255, 0.2);
    }
  }
`;
