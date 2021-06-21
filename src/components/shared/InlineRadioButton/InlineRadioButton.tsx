import React from "react";

interface RadioProps {
  onRadioSelected: (e: React.FormEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  placeHolder?: string;
  value: string;
}
const InlineRadioButton: React.FC<RadioProps> = ({
  onRadioSelected,
  isChecked,
  placeHolder,
  value,
}) => {
  return (
    <div className="form-check form-check-inline">
      <input
        checked={isChecked}
        className="form-check-input"
        name="inlineRadioOptions"
        type="radio"
        value={value}
        onChange={onRadioSelected}
      />
      <label className="form-check-label text-white" htmlFor="inlineRadio1">
        {placeHolder}
      </label>
    </div>
  );
};

export default InlineRadioButton;
