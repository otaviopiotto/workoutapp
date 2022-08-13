import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: "Primary" | "Secondary" | "Dashed" | "Link" | "Text";
  size?: "Large" | "Medium" | "Small";
  disabled?: boolean;
  dangerous?: boolean;
  circle?: boolean;
  square?: boolean;
  ghost?: boolean;
  style?: any;
  animation?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "Medium",
  ...props
}) => {
  return <ButtonContainer {...{ ...props, size }}>{children}</ButtonContainer>;
};

export default Button;
