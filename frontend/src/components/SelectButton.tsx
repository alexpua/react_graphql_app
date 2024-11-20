import React from "react";

interface SelectStatusProps {
  style: string;
  status: string;
  handleClickButton: (value: boolean) => void;
  children: React.ReactNode;
}
const SelectButton = ({
  style,
  children,
  handleClickButton,
}: SelectStatusProps) => (
  <button
    type="button"
    className={style}
    onClick={() => {
      handleClickButton(true);
    }}
    onBlur={() => {
      handleClickButton(false);
    }}
  >
    {children}
  </button>
);
export default SelectButton;
