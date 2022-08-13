import styled, { css, keyframes } from "styled-components";

import * as Select from "@radix-ui/react-select";

const disabledColor = ({ theme }: any) => theme.colors.grey_300;

const entranceAnimation = keyframes`
from{
    transform:rotateX(90deg);
    opacity:0;    
}
to{
    transform:rotateX(0deg);
    opacity:1;
}
`;

const errorColor = ({ theme }: any) => theme.colors.alert_failure;

interface ContainerProp {
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: any;
}

export const Container = styled.div<ContainerProp>`
  width: 100%;
  pointer-events: ${(prop) => prop.readOnly && "none"};
  z-index: 999;

  * {
    pointer-events: ${(prop) => prop.disabled && "none"};
    fill: ${(prop) => prop.disabled && disabledColor};
  }

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
    ${({ theme }) => theme.fonts.mulish.small_regular}
  }
`;

export const StyledRoot = styled(Select.Root)`
  width: 100%;
  position: relative;
`;
export const StyledTrigger = styled(Select.SelectTrigger)<ContainerProp>`
  width: 100%;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: space-between;

  padding: 12px 12px;
  border-radius: 8px;
  cursor: pointer;

  background: ${(prop) =>
    prop.disabled ? disabledColor : ({ theme }) => theme.colors.grey[900]};
  border: 1px solid
    ${(props) =>
      props.error ? errorColor : ({ theme }) => theme.colors.grey[800]};

  svg {
    color: #e0e0e0;
  }

  span {
    ${({ theme }) => theme.fonts.mulish.body_regular};
    color: ${({ theme }) => theme.colors.grey[500]};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.blue[600]};
    box-shadow: 0px 0px 0px 2px rgba(24, 144, 255, 0.2);
  }
`;

export const StyledContent = styled(Select.Content)<ContainerProp>`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transform-origin: top;
  animation: 0.4s ${entranceAnimation} ease;

  background: ${({ theme }) => theme.colors.grey[900]};
`;

export const StyledViewPort = styled(Select.Viewport)``;

export const StyledItem = styled(Select.Item)<ContainerProp>`
  padding: 12px 16px;
  cursor: pointer;

  ${({ theme }) => theme.fonts.mulish.body_regular};

  color: ${({ theme }) => theme.colors.grey[500]};

  &:hover {
    background: ${({ theme }) => theme.colors.grey[800]};
  }
`;

export const Separator = styled(Select.Separator)<ContainerProp>`
  height: 1px;
  background: ${({ theme }) => theme.colors.grey[800]};
`;

export const StyledSelectedValue = Select.Value;
export const StyledItemText = Select.ItemText;

const scrollButtons = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  color: ${({ theme }) => theme.colors.cold_grey[700]};
`;

export const ScrollUpButton = styled(Select.ScrollUpButton)`
  ${scrollButtons}
`;

export const ScrollDownButton = styled(Select.ScrollDownButton)`
  ${scrollButtons}
`;
