import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
// type WorkspaceProps = {};

const Workspace: React.FC = () => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <div>Code Editor</div>
    </Split>
  );
};
export default Workspace;
