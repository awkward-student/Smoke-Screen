import React from "react";
import JoditEditor from "jodit-react";
import { Card, CardGroup, Container, CardHeader } from "reactstrap";
import { useRef } from "react";

function Solution({ solution }) {
  const config = {
    // buttons: null,
    autofocus: true,
    enter: "BR",
    toolbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    height: 350,
    minHeight: 350,
    minWidth: 450,
    allowResizeY: false,
    allowResizeX: false,
    color: "transparent",
    readonly: true,
  };

  const editor = useRef(null);

  // Main Page Body ----------------------------------------------

  return (
    <>
      <div className="mt-5 userInfo">
      <Card className="text-center px-3 mt-3 pt-2"
          style={{
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "space-between",
          }}
        >
          <h6 className="inf">User Name : {solution.user?.name}</h6>
          {/* <h6 className="inf">User Email : {solution.user?.email}</h6> */}
          <h6 className="inf">Time Taken : {solution.timeTaken}</h6>
          <h6 className="inf">Flash Count : {solution.flashCount}</h6>
          <h6 className="inf">Submitted On : {solution.addedDate}</h6>
        </Card>
      </div>
      <div className="mt-2 userInfo">
        <CardGroup className="">
        
          <Card className="jodits">
            <CardHeader>
              Solution Que 1 : Language used - {solution.langQ1}
            </CardHeader>
            <JoditEditor
              ref={editor}
              config={config}
              className="joditStyle"
              value={solution.solutionQ1}
            />
          </Card>
          <Card className="jodits">
            <CardHeader>
              Solution Que 2 : Language used - {solution.langQ2}
            </CardHeader>
            <JoditEditor
              ref={editor}
              config={config}
              className="joditStyle"
              value={solution.solutionQ2}
            />
          </Card>
          <Card className="jodits">
            <CardHeader>
              Solution Que 3 : Language used - {solution.langQ3}
            </CardHeader>
            <JoditEditor
              ref={editor}
              config={config}
              className="joditStyle"
              value={solution.solutionQ3}
            />
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default Solution;
