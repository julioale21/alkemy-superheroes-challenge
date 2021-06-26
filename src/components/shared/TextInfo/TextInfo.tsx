import React from "react";

interface TextInfoProps {
  title: string;
  value: string | string[];
  textAlign?: "center" | "start" | "end";
  titleColor?: "primary" | "secondary" | "success" | "danger" | "warning";
  textSm?: boolean;
}
const TextInfo: React.FC<TextInfoProps> = ({
  title,
  value,
  titleColor = "warning",
  textAlign = "center",
  textSm = false,
}) => {
  return (
    <div>
      <p className={`text-${textAlign} ${textSm && "text-sm"}`}>
        <span className={`text-${titleColor} fw-bolder me-3 text-capitalize`}>{title}:</span>
        {`${value}`}
      </p>
    </div>
  );
};

export default TextInfo;
