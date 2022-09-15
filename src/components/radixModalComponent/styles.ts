import styled, { css, keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const entranceAnimation = keyframes`
from{
    transform:scaleY(0) ;
    opacity:0.6;    
  }
  to{    
    transform:scaleY(1) ;
    opacity:1;
}
`;

export const ModalRoot = styled(Dialog.Root)``;

export const StyledModalTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
`;

export const ModalTriggerClose = styled(Dialog.Close)`
  position: absolute;
  right: 22px;
  top: 22px;
  cursor: pointer;
  z-index: 9;
  background: ${({ theme }) => theme.colors.pallete[800]};

  border-radius: 99px;
  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.grey[700]};
  }
`;

export const ModalPortal = styled(Dialog.Portal)``;

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: 0.3s;
`;

interface modalProp {
  position?: "top" | "bottom" | "full" | "center";
}

export const ModalBody = styled.main<modalProp>`
  padding: 10px;
  background: ${({ theme }) => theme.colors.pallete[800]};
  max-height: 96vh;

  transition: 0.3s;
  animation: 0.3s ${entranceAnimation} ease;
  overflow: hidden;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);

  ${(prop) => {
    if (prop.position === "bottom") {
      return css`
        width: 100%;
        height: 97%;
        bottom: 0;
        border-radius: 40px 40px 0 0;
        transform-origin: bottom;
        position: absolute;
      `;
    } else if (prop.position === "center") {
      return css`
        width: 96%;
        height: unset;
        border-radius: 20px;
        transform-origin: center;
        position: relative;
      `;
    }
  }}
`;

export const StyledModalContent = styled(Dialog.Content)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  transition: 0.3s;
  z-index: 99;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  h5 {
    ${({ theme }) => theme.fonts.mulish.h5_bold};

    color: ${({ theme }) => theme.colors.grey[100]};
    margin-right: 50px;
  }
`;
