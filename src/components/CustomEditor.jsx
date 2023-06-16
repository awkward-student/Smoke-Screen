import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const CustomEditor = () => {
  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <>
      <head></head>
      <Editor
        selector="textareaEdit"
        apiKey="bgx3j6j885xiq1toxfp8jbpr389dyji48oc6mejvg4s557un"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 450,
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
          contextmenu: null,
          contextmenu: true,
          toolbar: false,
          statusbar: false,
          auto_focus: true,
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color:transparent; user-select:none;-webkit-user-select:none;-webkit-touch-callout: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;}",
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
};

export default CustomEditor;
