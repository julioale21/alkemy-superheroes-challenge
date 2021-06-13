import React from "react";

interface FormProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<FormProps> = ({ onInputChange, onFormSubmit }) => {
  return (
    <form className="form-search" onSubmit={(e) => onFormSubmit(e)}>
      <input placeholder="search you hero" type="text" onChange={(e) => onInputChange(e)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
