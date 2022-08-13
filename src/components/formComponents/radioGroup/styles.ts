import styled, { keyframes } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

const checkAnim = keyframes`

from{
  opacity:0 ;
}
to{
  opacity:1 ;
}
`;

interface RootProp {
  flexDirection?: "column" | "row";
}

export const RadioRoot = styled(RadioGroup.Root)<RootProp>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(prop) => prop.flexDirection};
  gap: 14px;
  justify-content: space-between;
`;

export const Container = styled.div<RootProp>`
  width: ${(prop) =>
    prop.flexDirection === "column" ? " 100%" : "fit-content"};
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: space-between;

  label {
    display: block;
    ${({ theme }) => theme.fonts.mulish.body_regular}
    color:${({ theme }) => theme.colors.cold_grey_800};
    cursor: pointer;
  }
`;
export const RadioIndication = styled(RadioGroup.Indicator)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${({ theme }) => theme.colors.blue_800};
  animation: 0.4s ${checkAnim} ease;

  color: ${({ theme }) => theme.colors.white};
`;

export const Radio = styled(RadioGroup.Item)`
  width: 16px;
  height: 16px;
  display: block;
  border: solid 1px ${({ theme }) => theme.colors.blue_800};
  border-radius: 2px;
  padding: 0;
  position: relative;
`;
