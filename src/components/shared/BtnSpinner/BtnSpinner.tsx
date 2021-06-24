import React from "react";
import { Colors } from "../../../types/Colors";

interface Props {
  color?: Colors;
  loading?: boolean;
  className?: string;
}

const BtnSpinner: React.FC<Props> = ({ color, className, loading = false, children }) => {
  return (
    <button className={`btn-${color} ${className} mt-4 fs-5`} type="submit">
      {loading && (
        <span aria-hidden="true" className="spinner-border spinner-border-sm" role="status"></span>
      )}
      {loading ? "Loading..." : children}
    </button>
  );
};

export default BtnSpinner;
