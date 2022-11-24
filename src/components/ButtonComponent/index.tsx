import React from "react";

export interface ButtonProps {
  label: string;
}

const ButtonComponent = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default ButtonComponent;
