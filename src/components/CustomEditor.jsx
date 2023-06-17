import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "reactstrap";

const CustomEditor = () => {
  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  const colour =
    "body { background-color:black ;font-family:Helvetica,Arial,sans-serif; font-size:14px; color:transparent; user-select:none;-webkit-user-select:none;-webkit-touch-callout: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;}";
  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    // document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <>
      <Editor
        selector="textareaEdit"
        apiKey="bgx3j6j885xiq1toxfp8jbpr389dyji48oc6mejvg4s557un"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          browser_spellcheck: false,
          height: 400,
          width: 650,

          setup: (editor) => {
            editor.on("keydown", (e) => {
              if (e.code == "F12") {
                console.log("F12");
                return false;
              } else if (e.ctrlKey && e.code === "KeyA") {
                console.log("CTRL + A");
                alert("Text Selection Not Allowed\n\nReloading The Page....");
                window.location.reload();
                editor.setContent = "Your writings are Gone";
                editor.initialValue = "Gone";
                return false;
              } else if (e.ctrlKey && e.code === "KeyS") {
                console.log("CTRL + S");
                alert("Text Saving Not Allowed");
                return false;
              } else if (e.ctrlKey && e.shiftKey && e.code == "KeyI") {
                console.log("CTRL + SHIFT + I");
                return false;
              } else console.log("keydown press detected" + e.code);
              // tinymce.activeEditor.execCommand("mceSpellcheckEnable");
            });
          },
          menubar: false,
          plugins: [],
          paste_preprocess: function (plugin, args) {
            args.stopImmediatePropagation();
            args.stopPropagation();
            args.preventDefault();
            console.log("Attempted to paste: ", args.content);
            // replace copied text with empty string
            args.content = "";
          },
          contextmenu_never_use_native: true,
          // contextmenu: null,
          contextmenu: false,
          toolbar: false,
          statusbar: false,
          auto_focus: true,
          content_style: colour,
        }}
      />
      {/* <Button>Clibk</Button> */}
    </>
  );
};

export default CustomEditor;
