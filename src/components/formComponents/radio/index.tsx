import { useRef, useState, useEffect, InputHTMLAttributes } from "react";
import { GoCheck } from "react-icons/go";
import { RadioRoot, RadioIndication } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  id: string;
  defaultChecked?: boolean;
  checked?: boolean;
  setChecked?: any;
  disabled?: boolean;
  error?: string;
  register?: any;
}

const RadioComponent = ({
  checked,
  setChecked,
  register,
  id,
  error,
  ...props
}: InputProps) => {
  const [check, setCheck] = useState(checked);
  const checkBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCheck(checkBoxRef.current?.checked);
  }, [checked, props.defaultChecked]);

  const handleRadioBtn = () => {
    checkBoxRef.current?.click();
    setCheck(checkBoxRef.current?.checked);
    setChecked(!checked);
  };

  return (
    <>
      <RadioRoot type="button" onClick={handleRadioBtn}>
        <label htmlFor={id}>{props.label} </label>
        <RadioIndication checkedProp={check}>
          <GoCheck />
        </RadioIndication>
        <input
          type="radio"
          name={props.name}
          id={id}
          ref={checkBoxRef}
          className="radio-hidden"
          {...register}
          {...props}
        />
        {error && <p>{error}</p>}
      </RadioRoot>
    </>
  );
};

export default RadioComponent;
