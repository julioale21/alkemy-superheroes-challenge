import React from "react";
import Work from "../../../../models/Work";
import TextInfo from "../../../shared/TextInfo";

interface WorkProps {
  work: Work;
}
const WorkComponent: React.FC<WorkProps> = ({ work }) => {
  return (
    <div className="work-section">
      <h6>Work</h6>
      <div className="row">
        {Object.keys(work).map((key) => (
          <TextInfo key={key} textSm textAlign="start" title={key} value={work[key]} />
        ))}
      </div>
    </div>
  );
};

export default WorkComponent;
