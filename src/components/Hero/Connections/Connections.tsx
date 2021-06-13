import React from "react";
import Connections from "../../../models/Connections";

interface ConnectionsProps {
  connections: Connections;
}

const ConnectionsComponent: React.FC<ConnectionsProps> = ({ connections }) => {
  return (
    <div className="connections-section">
      <h6>Connections</h6>
      <p className="text-start text-sm">
        <span className="fw-bold me-2">Group affiliation:</span>
        {connections["group-affiliation"]}
      </p>
      <p className="text-start text-sm">
        <span className="fw-bold me-2">Relatives:</span>
        {connections.relatives}
      </p>
    </div>
  );
};

export default ConnectionsComponent;
