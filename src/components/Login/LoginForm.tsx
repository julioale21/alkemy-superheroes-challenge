import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";

interface LoginProps {
  login: (email: string, password: string) => void;
  error: string | null;
}

const LoginForm: React.FC<LoginProps> = ({ login, error }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email field is required").email("Invalid email"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must contain at least 4 characters"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <form
      className="form d-flex flex-column col-10 col-sm-8 col-md-4 rounded h-50 px-5 justify-content-center"
      onSubmit={formik.handleSubmit}
    >
      <input
        autoComplete="off"
        className={`input mx-2 ${formik.errors.email && "error-input"}`}
        id="email"
        placeholder="Enter your email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="error-text">{formik.errors.email}</p>
      ) : null}

      <input
        className={`input mt-2 mx-2 ${formik.errors.password && "error-input"}`}
        id="password"
        placeholder="Enter your password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      {formik.touched.password && formik.errors.password ? (
        <p className="error-text">{formik.errors.password}</p>
      ) : null}

      <button className="button mt-4 mx-5" type="submit">
        Login
      </button>

      {error && <p className="mt-3 text-danger">{error}</p>}
    </form>
  );
};

export default LoginForm;
