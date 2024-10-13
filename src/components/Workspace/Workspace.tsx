import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
// type WorkspaceProps = {};

const Workspace: React.FC = () => {
  return (
    <Split className="split">
      <ProblemDescription />
      <div>Code Editor</div>
    </Split>
  );
};
export default Workspace;
