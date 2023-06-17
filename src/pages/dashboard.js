import React, {useCallback, useEffect, useState} from "react";
import Base from "../components/Base";
import Bisector from "../components/Bisector";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Button } from "reactstrap";

const Dashboard = () => {
    const handle = useFullScreenHandle();
    const escFunction = useCallback((e) => {
        if (e.code === "Escape") {
          alert("ESC Pressed");
          window.location.reload();
        }

        else if(e.code === "F11") {
          alert("F11 Pressed");
          window.location.reload();
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
      }, [escFunction]);
    
  return (
    <FullScreen handle={handle}>
      <Base>
        <Bisector/>
        {/* <Button onClick={handle.enter}>Press</Button> */}
      </Base>
    </FullScreen>
  );
};

export default Dashboard;
