import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import { Container, TextAreaContainer } from "./styles";

interface TextAereaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  register?: any;
  maxWidth?: number;
  minWidth?: number;
  style?: CSSProperties | undefined;
}

const TextAreaComponent = ({
  label,
  type,
  register,
  error,
  disabled,
  maxWidth,
  minWidth,
  style,
  ...props
}: TextAereaProps) => {
  return (
    <Container style={style} maxWidth={maxWidth} minWidth={minWidth}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextAreaContainer disabled={disabled} error={error}>
        <textarea
          id={props.id || props.name}
          placeholder={props.placeholder || label}
          {...register}
          {...props}
        />
      </TextAreaContainer>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default TextAreaComponent;
