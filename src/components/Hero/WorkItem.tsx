import React from "react";

interface WorkItemProps {
  name: string;
  value: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ name, value }) => {
  return (
    <p className="text-start text-sm">
      <span className="fw-bold me-2">{name}:</span>
      {value}
    </p>
  );
};

export default WorkItem;
