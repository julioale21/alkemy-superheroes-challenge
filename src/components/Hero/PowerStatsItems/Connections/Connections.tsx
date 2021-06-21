import React from "react";
import Connections from "../../../../models/Connections";
import TextInfo from "../../../shared/TextInfo";

interface ConnectionsProps {
  connections: Connections;
}

const ConnectionsComponent: React.FC<ConnectionsProps> = ({ connections }) => {
  return (
    <div className="connections-section">
      <h6>Connections</h6>
      <TextInfo
        textSm
        textAlign="start"
        title="Group affiliation:"
        value={connections["group-affiliation"]}
      />
      <TextInfo textSm textAlign="start" title="Relatives:" value={connections.relatives} />
    </div>
  );
};

export default ConnectionsComponent;
