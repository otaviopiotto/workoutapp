import { InputHTMLAttributes, useRef, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { CSSProperties } from "styled-components";
import { Container, InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  affix?: {
    prefix?: any;
    suffix?: any;
  };
  error?: string;
  register?: any;
  inputSize?: "Large" | "Medium" | "Small";
  maxWidth?: number;
  minWidth?: number;
  required?: boolean;
  isLoading?: boolean;
  style?: CSSProperties | undefined;
}

const InputComponent = ({
  label,
  type,
  register,
  affix,
  error,
  inputSize = "Medium",
  disabled,
  maxWidth,
  minWidth,
  required,
  isLoading,
  style,
  ...props
}: InputProps) => {
  const [seePass, setSeePass] = useState(false);
  const inputRef = useRef(null);

  return (
    <Container
      maxWidth={maxWidth}
      minWidth={minWidth}
      className={props.className}
      required={required}
      style={style}
    >
      <label htmlFor={props.id || props.name}>{label}</label>
      <InputContainer
        size={inputSize}
        affix={affix}
        disabled={disabled}
        error={error}
        passwordType={type === "password"}
      >
        {affix?.prefix && (
          <div className="prefix-container">{affix?.prefix}</div>
        )}

        <input
          id={props.id || props.name}
          type={!seePass ? type : "text"}
          ref={inputRef}
          placeholder={props.placeholder || label}
          {...register}
          {...props}
        />
        {affix?.suffix && (
          <div className="sufix-container">{affix?.suffix}</div>
        )}

        {type === "password" && (
          <button
            type="button"
            className="see-pass-btn"
            onClick={() => setSeePass(!seePass)}
          >
            {!seePass ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye style={{ fill: "#5392CA" }} />
            )}
          </button>
        )}
      </InputContainer>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default InputComponent;
