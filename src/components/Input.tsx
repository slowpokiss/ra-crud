import { ChangeEventHandler, forwardRef } from "react";

interface props {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  classic: string;
  type: string;
  placeholder?: string
}

const Input = forwardRef(function Input(props: props, ref: any) {
  const { value, onChange, classic, type, placeholder } = props;
  return (
    <input
      type={type}
      defaultValue={value}
      className={`form-input ${classic}`}
      onChange={onChange}
      name={classic}
      ref={ref}
      placeholder={placeholder}
    />
  );
});

export default Input;
