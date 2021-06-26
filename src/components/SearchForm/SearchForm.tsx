import React from "react";
import InlineRadioButton from "../shared/InlineRadioButton";
import searchLogo from "../../assets/search2.png";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormProps {
  onFormSubmit: (value: string) => void;
  onCheckButtonChanged: (e: React.FormEvent<HTMLInputElement>) => void;
  checkValue: string;
  value: string;
}

const SearchForm: React.FC<FormProps> = ({
  onFormSubmit,
  onCheckButtonChanged,
  checkValue,
  value,
}) => {
  const formik = useFormik({
    initialValues: {
      searchText: value,
    },
    validationSchema: Yup.object({
      searchText: Yup.string().required("Field is required"),
    }),
    onSubmit: (value) => {
      onFormSubmit(value.searchText);
    },
  });

  return (
    <form
      className="form-search d-flex flex-column align-items-center"
      onSubmit={formik.handleSubmit}
    >
      <div className="row w-100">
        <div className="mb-4 text-center">
          <img alt="search" src={searchLogo} width="160px" />
        </div>
        <div className="col-10 col-md-4 mx-auto">
          {formik.touched.searchText && formik.errors.searchText ? (
            <p className="error-text text-left mb-0 mx-0">{formik.errors.searchText}</p>
          ) : null}
          <div className="input-group input-group-lg">
            <input
              aria-describedby="inputGroup-sizing-lg"
              aria-label="Sizing example input"
              autoComplete="off"
              className="form-control"
              id="searchText"
              placeholder="Search your hero"
              type="text"
              value={formik.values.searchText}
              onChange={formik.handleChange}
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

      <button className="btn btn-warning mt-3" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
