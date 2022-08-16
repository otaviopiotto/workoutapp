import React, { ReactElement } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CSSProperties } from "styled-components";
import {
  ModalRoot,
  ModalPortal,
  ModalOverlay,
  StyledModalContent,
  StyledModalTrigger,
  ModalTriggerClose,
  ModalTitle,
  ModalBody,
} from "./styles";

interface ModalProps {
  title: string | ReactElement;
  element?: ReactElement;
  contentStyle?: CSSProperties | undefined;
  children?: any;
  position?: "top" | "bottom" | "full" | "center";
}

export const ModalContent: React.FC<ModalProps> = ({
  title,
  element,
  children,
  contentStyle,
  position = "bottom",
}) => {
  return (
    <ModalPortal>
      <ModalOverlay>
        <ModalBody position={position}>
          <StyledModalContent style={contentStyle}>
            <ModalTriggerClose>
              <AiOutlineCloseCircle />
            </ModalTriggerClose>

            <ModalTitle>
              <h5>{title}</h5>
              {element}
            </ModalTitle>
            {children}
          </StyledModalContent>
        </ModalBody>
      </ModalOverlay>
    </ModalPortal>
  );
};

export const Modal = ModalRoot;

export const ModalTrigger = StyledModalTrigger;
