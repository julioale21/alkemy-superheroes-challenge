import React from "react";

interface FormProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<FormProps> = ({ onInputChange, onFormSubmit }) => {
  return (
    <form className="form-search" onSubmit={(e) => onFormSubmit(e)}>
      <div className="row">
        <div className="col-10 col-md-4 mx-auto">
          <div className="input-group input-group-lg">
            <input
              aria-describedby="inputGroup-sizing-lg"
              aria-label="Sizing example input"
              className="form-control"
              placeholder="Search your hero"
              type="text"
              onChange={onInputChange}
            />
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              id="inlineRadio1"
              name="inlineRadioOptions"
              type="radio"
              value="option1"
            />
            <label className="form-check-label text-white" htmlFor="inlineRadio1">
              Align All
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              id="inlineRadio2"
              name="inlineRadioOptions"
              type="radio"
              value="option2"
            />
            <label className="form-check-label text-white" htmlFor="inlineRadio2">
              Align Good
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              id="inlineRadio3"
              name="inlineRadioOptions"
              type="radio"
              value="option3"
            />
            <label className="form-check-label text-white" htmlFor="inlineRadio3">
              Align Bad
            </label>
          </div>
        </div>
      </div>
      <button className="btn btn-warning mt-3">Buscar</button>
    </form>
  );
};

export default SearchForm;
