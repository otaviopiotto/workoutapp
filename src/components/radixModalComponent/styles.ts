import styled, { keyframes } from "styled-components";

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
  background: ${({ theme }) => theme.colors.grey[900]};
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

export const ModalBody = styled.main`
  width: 100%;
  height: 80%;
  padding: 10px;
  background: ${({ theme }) => theme.colors.grey[900]};
  border-radius: 30px 30px 0 0;
  top: 10%;
  bottom: 0;
  position: relative;
  transition: 0.3s;
  transform-origin: bottom;
  animation: 0.3s ${entranceAnimation} ease;
  overflow: hidden;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
`;

export const StyledModalContent = styled(Dialog.Content)`
  width: 100%;
  max-height: 94vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  transition: 0.3s;
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
