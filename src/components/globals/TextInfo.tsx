import React from "react";

interface TextInfoProps {
  title: string;
  value: string;
  titleColor?: "primary" | "secondary" | "success" | "danger" | "warning";
}
const TextInfo: React.FC<TextInfoProps> = ({ title, value, titleColor = "warning" }) => {
  return (
    <div>
      <p>
        <span className={`text-${titleColor} fw-bolder me-3`}>{title}:</span>
        {value}
      </p>
    </div>
  );
};

export default TextInfo;
