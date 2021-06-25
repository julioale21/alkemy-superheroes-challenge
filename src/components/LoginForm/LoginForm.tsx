import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";
import BtnSpinner from "../shared/BtnSpinner";

interface LoginProps {
  login: (email: string, password: string) => void;
  error?: string | null;
  loading: boolean;
}

const LoginForm: React.FC<LoginProps> = ({ login, error, loading }) => {
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
      className="form d-flex flex-column col-10 col-sm-8 col-md-6 col-lg-4 rounded h-50 px-5 justify-content-center"
      onSubmit={formik.handleSubmit}
    >
      <input
        autoComplete="off"
        className={`input mx-2 py-3 ${formik.errors.email ? "mb-0" : "mb-3"}`}
        id="email"
        placeholder="Enter your email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="error-text">{formik.errors.email}</p>
      ) : null}

      <input
        className={`input mt-2 py-3 mx-2`}
        id="password"
        placeholder="Enter your password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      {formik.touched.password && formik.errors.password ? (
        <p className="error-text">{formik.errors.password}</p>
      ) : null}

      <BtnSpinner className="button" loading={loading}>
        Login
      </BtnSpinner>

      {error && (
        <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
          <strong>Login Error!</strong> {error}
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="alert"
            type="button"
          ></button>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
