import React, { useRef } from "react";
import Base from "../../components/Base";
import { Card, CardGroup, CardHeader, Container, Label } from "reactstrap";
import JoditEditor from "jodit-react";
import "../../App.css";

const AdminDashboard = () => {
  const config = {
    // buttons: null,
    autofocus: true,
    enter: "BR",
    toolbar: false,
    iframe: true,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    height: 450,
    minHeight: 450,
    minWidth: 450,
    allowResizeY: false,
    allowResizeX: false,
    color: "transparent",
    readonly: true,
  };

  const editor = useRef(null);

  var language1 = "java";
  var language2 = "c++";
  var language3 = "c++";

  return (
    <Base>
      <Container
        style={{
          minHeight: "80vh",
          minWidth: "90vw",
          display: "grid",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          marginTop: "12px",
        }}
      >
        <div className="mt-5 p-2 userInfo">
          <Card>
            User Name :{} User Email :{} Time Taken :{} Flash Count :{}{" "}
            Submitted On :{}
          </Card>
        </div>
        <div className="mt-4 userInfo">
          <CardGroup className="">
            <Card className="jodits">
              <CardHeader>
                Solution Que 1 : Language used - {language1}
              </CardHeader>
              <JoditEditor
                ref={editor}
                config={config}
                className="joditStyle"
              />
            </Card>
            <Card className="jodits">
              <CardHeader>
                Solution Que 2 : Language used - {language2}
              </CardHeader>
              <JoditEditor
                ref={editor}
                config={config}
                className="joditStyle"
              />
            </Card>
            <Card className="jodits">
              <CardHeader>
                Solution Que 3 : Language used - {language3}
              </CardHeader>
              <JoditEditor
                ref={editor}
                config={config}
                className="joditStyle"
              />
            </Card>
          </CardGroup>
        </div>
      </Container>
    </Base>
  );
};

export default AdminDashboard;
