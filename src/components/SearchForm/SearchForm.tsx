import React from "react";
import InlineRadioButton from "../shared/InlineRadioButton";
import searchLogo from "../../assets/search2.png";

interface FormProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCheckButtonChanged: (e: React.FormEvent<HTMLInputElement>) => void;
  checkValue: string;
  value: string;
}

const SearchForm: React.FC<FormProps> = ({
  onInputChange,
  onFormSubmit,
  onCheckButtonChanged,
  checkValue,
  value,
}) => {
  return (
    <form className="form-search" onSubmit={(e) => onFormSubmit(e)}>
      <div className="row">
        <div className="mb-4">
          <img alt="search" src={searchLogo} width="160px" />
        </div>
        <div className="col-10 col-md-4 mx-auto">
          <div className="input-group input-group-lg">
            <input
              aria-describedby="inputGroup-sizing-lg"
              aria-label="Sizing example input"
              className="form-control"
              placeholder="Search your hero"
              type="text"
              value={value}
              onChange={onInputChange}
            />
          </div>

          <InlineRadioButton
            isChecked={checkValue === "all"}
            placeHolder="Align All"
            value="all"
            onRadioSelected={onCheckButtonChanged}
          />

          <InlineRadioButton
            isChecked={checkValue === "good"}
            placeHolder="Align Good"
            value="good"
            onRadioSelected={onCheckButtonChanged}
          />

          <InlineRadioButton
            isChecked={checkValue === "bad"}
            placeHolder="Align Bad"
            value="bad"
            onRadioSelected={onCheckButtonChanged}
          />
        </div>
      </div>
      <button className="btn btn-warning mt-3">Buscar</button>
    </form>
  );
};

export default SearchForm;
