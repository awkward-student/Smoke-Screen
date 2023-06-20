import JoditEditor from "jodit-react";
import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import "../App.css";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Container,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  Navbar,
} from "reactstrap";
import CustomEditor from "./CustomEditor";
import $ from "jquery";
import { useState } from "react";
import {
  doLogout,
  getCurrentUser,
  getSolutionContent,
  isLoggedIn,
  removeSolution,
  saveSolution,
} from "../auth/auth";
import { SubmitSolution } from "../services/solution-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Bisector = () => {
  {
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script>
        {$(window).on("keydown", function (event) {
          if (event.code == "F12") {
            return false;
          } else if (event.code == "F11") {
            return false;
          } else if (event.code == "Escape") {
            console.log("hello");
            return false;
          } else if (event.ctrlKey && event.shiftKey && event.code == "KeyI") {
            return false;
          } else if (event.ctrlKey && event.code == "KeyI") {
            return false;
          }
        })}
      </script>
    </head>;
  }
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    function ctrlShiftKey(e, code) {
      return e.ctrlKey && e.shiftKey && e.code === code.charCodeAt(0);
    }

    document.addEventListener("fullscreenchange", (e) => {
      if (document.fullscreenElement == null) {
        SubmitSolution(getSolutionContent(), getCurrentUser().id)
          .then((res) => {
            toast.success("Assessment Submited Automatically");
            doLogout(() => {
              toast.warning("Logged you out");
              removeSolution(() => {
                toast.info("Redirected");
                navigate("/");
                return;
              });
            });
          })
          .catch((error) => {
            console.log(error);
            toast.error(error);
          });
        document.removeEventListener("fullscreenchange", () => {});
      }
    });

    document.onkeydown = (e) => {
      if (
        e.code === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.code === "U".charCodeAt(0))
      )
        return false;
    };
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const config = {
    autofocus: true,
    enter: "BR",
    toolbar: false,
    iframe: true,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    height: 450,
    minHeight: 450,
    maxHeight: 450,
    allowResizeY: false,
    allowResizeX: false,
    readOnly: true,
    disabled: true,
  };

  const switchQuestion = (event) => {
    if ([event.target.id] == "q1") {
      document.getElementById("que1").classList.remove("hide");
      document.getElementById("que2").classList.add("hide");
      document.getElementById("que3").classList.add("hide");
      document.getElementById("sol1").classList.remove("hide");
      document.getElementById("sol2").classList.add("hide");
      document.getElementById("sol3").classList.add("hide");
    }
    if ([event.target.id] == "q2") {
      document.getElementById("que2").classList.remove("hide");
      document.getElementById("que1").classList.add("hide");
      document.getElementById("que3").classList.add("hide");
      document.getElementById("sol2").classList.remove("hide");
      document.getElementById("sol1").classList.add("hide");
      document.getElementById("sol3").classList.add("hide");
    }
    if ([event.target.id] == "q3") {
      document.getElementById("que3").classList.remove("hide");
      document.getElementById("que2").classList.add("hide");
      document.getElementById("que1").classList.add("hide");
      document.getElementById("sol3").classList.remove("hide");
      document.getElementById("sol2").classList.add("hide");
      document.getElementById("sol1").classList.add("hide");
    }
  };

  const navigate = useNavigate();

  const editor = useRef(null);

  const fieldChanged = (e) => {
    setLanguage({ ...language, [e.target.id]: e.target.value });
  };

  const [solOne, setSolOne] = useState(null);
  const [solTwo, setSolTwo] = useState(null);
  const [solThree, setSolThree] = useState(null);
  const [language, setLanguage] = useState({
    langSolOne: "",
    langSolTwo: "",
    langSolThree: "",
  });

  const [content, setContent] = useState({
    langQ1: "",
    langQ2: "",
    langQ3: "",
    solutionQ1: "",
    solutionQ2: "",
    solutionQ3: "",
    timeTaken: "",
    flashCount: "0",
  });

  useEffect(() => {
    setContent({ ...content, solutionQ1: solOne });
  }, [solOne]);
  useEffect(() => {
    setContent({ ...content, solutionQ2: solTwo });
  }, [solTwo]);
  useEffect(() => {
    setContent({ ...content, solutionQ3: solThree });
  }, [solThree]);
  useEffect(() => {
    setContent({ ...content, langQ1: language.langSolOne });
  }, [language.langSolOne]);
  useEffect(() => {
    setContent({ ...content, langQ2: language.langSolTwo });
  }, [language.langSolTwo]);
  useEffect(() => {
    setContent({ ...content, langQ3: language.langSolThree });
  }, [language.langSolThree]);
  useEffect(() => {
    saveSolution(content);
  }, [content]);

  const submitForm = (e) => {
    e.preventDefault();
    const finalContent = getSolutionContent();

    SubmitSolution(finalContent, getCurrentUser().id)
      .then((res) => {
        stopTimer();
        toast.success("Assessment Submited Successfully");
        doLogout(() => {
          toast.warning("Logged you out");
          removeSolution(() => {
            toast.info("Redirected");
            navigate("/login");
          });
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  const colour =
    "body { background-color:black ;font-family:Helvetica,Arial,sans-serif; font-size:14px; color:transparent; user-select:none;-webkit-user-select:none;-webkit-touch-callout: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;}";
  const revealColour =
    "body { background-color:black ;font-family:Helvetica,Arial,sans-serif; font-size:14px; color:yellow; user-select:none;-webkit-user-select:none;-webkit-touch-callout: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none;}";
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const addMinutes = (date, minutes) => {
    return new Date(date + minutes * 60000);
  };

  var x;

  const startTimer = () => {
    const countDownDate = addMinutes(new Date().getTime(), 39);
    x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("timer").innerHTML = mins + " : " + secs;
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(x);
    document.exitFullscreen();
  };

  const viewTest = () => {
    document.getElementById("notice").classList.add("noticeHidden");
    document.documentElement.requestFullscreen();
    //
    //
    //
    startTimer();
  };

  const revealCode = () => {
    // console.log(content.flashCount)
    switch (content.flashCount) {
      case "0":
        setContent({ ...content, flashCount: "1" });
        document.getElementById("revealer").classList.remove("revealHidden");
        setTimeout(() => {
          document.getElementById("revealer").classList.add("revealHidden");
        }, 10000);
        break;
      case "1":
        setContent({ ...content, flashCount: "2" });
        document.getElementById("revealer").classList.remove("revealHidden");
        setTimeout(() => {
          document.getElementById("revealer").classList.add("revealHidden");
        }, 7000);
        break;
      case "2":
        setContent({ ...content, flashCount: "3" });
        document.getElementById("revealer").classList.remove("revealHidden");
        setTimeout(() => {
          document.getElementById("revealer").classList.add("revealHidden");
        }, 5000);
        break;
      default:
        return;
    }
  };

  return (
    <div className="codeBook mt-0 pt-1">
      <Navbar
        dark
        expand="md"
        className="mt-3"
        style={{
          border: "2px transparent solid",
          backgroundColor: "#1a0080",
          minHeight: "50px",
          top: "7vh",
          zIndex: "1",
          color: "#fff",
        }}
      >
        Hello, {isLoggedIn() && getCurrentUser().name}
        <span id="timer"></span>
        <Button
          onClick={revealCode}
          disabled={content.flashCount >= 3}
          color="success"
          className="reveal"
        >
          Reveal Code
        </Button>
      </Navbar>
      <Card className="codeBookCard" style={{ border: "none" }}>
        <CardBody className="formCard mt-0 mb-4">
          <form className="formX" onSubmit={submitForm}>
            <CardGroup className="codeCard mt-4 mb-4">
              <Card
                className="bx questionBox px-2"
                style={{
                  border: "2px rounded solid",
                  marginRight: "2px",
                  backgroundColor: "",
                }}
              >
                <div className="buttonsConfig">
                  <CardGroup
                    className="questionToggler"
                    style={{ minHeight: "80px" }}
                  >
                    <Card className="mx-1 my-1" style={{ border: "none" }}>
                      <Button
                        style={{
                          minHeight: "45px",
                          backgroundColor: "#1a0080",
                        }}
                        id="q1"
                        onClick={switchQuestion}
                      >
                        QUESTION - 1
                      </Button>
                    </Card>
                    <Card className="mx-1 my-1" style={{ border: "none" }}>
                      <Button
                        style={{
                          minHeight: "45px",
                          backgroundColor: "#1a0080",
                        }}
                        id="q2"
                        onClick={switchQuestion}
                      >
                        QUESTION - 2
                      </Button>
                    </Card>
                    <Card className="mx-1 my-1" style={{ border: "none" }}>
                      <Button
                        style={{
                          minHeight: "45px",
                          backgroundColor: "#1a0080",
                        }}
                        id="q3"
                        onClick={switchQuestion}
                      >
                        QUESTION - 3
                      </Button>
                    </Card>
                  </CardGroup>
                </div>
                <div id="que1" className="questionDiv">
                  <p>
                    <b>
                      <em>Question 1</em>
                    </b>
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam assumenda perspiciatis laborum recusandae! Quae
                    incidunt inventore numquam totam fugiat hic, nemo voluptatem
                    quod tempore alias autem, adipisci pariatur modi
                    exercitationem. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis eum, ex esse facilis eveniet iure
                    magnam dolores minima reiciendis fugiat quia! Iure rerum
                    voluptas debitis, harum reprehenderit magni fugiat
                    similique? Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Voluptas, eum? Facere laborum sint
                    veritatis dolorem officia, itaque quae beatae ea, tempora,
                    dolores possimus quia expedita temporibus doloribus quos eos
                    nulla.
                    <br />
                  </p>
                </div>
                <div id="que2" className="questionDiv hide">
                  <p>
                    <b>
                      <em>Question 2</em>
                    </b>
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam assumenda perspiciatis laborum recusandae! Quae
                    incidunt inventore numquam totam fugiat hic, nemo voluptatem
                    quod tempore. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Temporibus obcaecati nihil rerum cumque
                    harum veniam adipisci quisquam quasi iste dolorum quo
                    deleniti labore laudantium ullam, reiciendis magnam iure
                    sunt doloribus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Amet, harum neque reprehenderit nam
                    accusamus aliquid architecto eligendi asperiores illo ea
                    alias consequatur, cumque blanditiis necessitatibus ad
                    reiciendis minima magni optio?
                  </p>
                </div>
                <div id="que3" className="questionDiv hide">
                  <p>
                    <b>
                      <em>Question 3</em>
                    </b>
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam assumenda perspiciatis laborum recusandae! Quae
                    incidunt inventore numquam totam fugiat hic, nemo voluptatem
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur animi dicta nostrum cumque ipsa voluptate natus
                    a eligendi placeat vero dignissimos, illum minus rem at fuga
                    fugit amet ea praesentium! Voluptas, eum? Facere laborum
                    sint veritatis dolorem officia, itaque quae beatae ea,
                    tempora, dolores possimus quia expedita temporibus doloribus
                    quos eos nulla.
                  </p>
                </div>
              </Card>

              <Card
                className="bx solutionBox px-2"
                style={{ border: "none", marginLeft: "2px", maxWidth: "90%" }}
              >
                <FormGroup className="mt-2 solution" id="sol1">
                  <span className="langChoose">
                    <Input
                      className="my-2 py-0"
                      style={{
                        width: "20%",
                        display: "inline-block",
                        textAlign: "center",
                        outline: "none",
                        border: "none",
                      }}
                      type="select"
                      id="langSolOne"
                      placeholder="Language"
                      name="langSolOne"
                      defaultValue={0}
                      onChange={fieldChanged}
                    >
                      <option disabled value={0}>
                        --language--
                      </option>
                      <option value={"java"}>Java</option>
                      <option value={"c++"}>C++</option>
                      <option value={"python"}>Python</option>
                    </Input>
                  </span>
                  <Card className="txtarea">
                    {/* <CustomEditor
                      selector="textareaEdit"
                      id="solOne"
                      name="solOne"
                    /> */}

                    <Editor
                      apiKey="bgx3j6j885xiq1toxfp8jbpr389dyji48oc6mejvg4s557un"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      onEditorChange={setSolOne}
                      id="solOne"
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
                              alert(
                                "Text Selection Not Allowed\n\nReloading The Page...."
                              );
                              window.location.reload();
                              editor.setContent = "Your writings are Gone";
                              editor.initialValue = "Gone";
                              return false;
                            } else if (e.ctrlKey && e.code === "KeyS") {
                              console.log("CTRL + S");
                              alert("Text Saving Not Allowed");
                              return false;
                            } else if (
                              e.ctrlKey &&
                              e.shiftKey &&
                              e.code == "KeyI"
                            ) {
                              console.log("CTRL + SHIFT + I");
                              return false;
                            } else
                              console.log("keydown press detected" + e.code);
                          });
                        },
                        menubar: false,
                        plugins: [],
                        paste_preprocess: function (plugin, args) {
                          args.stopImmediatePropagation();
                          args.stopPropagation();
                          args.preventDefault();
                          console.log("Attempted to paste: ", args.content);
                          args.content = "";
                        },
                        contextmenu_never_use_native: true,
                        contextmenu: false,
                        toolbar: false,
                        statusbar: false,
                        auto_focus: true,
                        content_style: colour,
                      }}
                    />
                  </Card>
                </FormGroup>
                <FormGroup className="mt-2 solution hide" id="sol2">
                  <span className="langChoose">
                    <Input
                      className="my-2 py-0"
                      style={{
                        width: "20%",
                        display: "inline-block",
                        textAlign: "center",
                        outline: "none",
                        border: "none",
                      }}
                      type="select"
                      id="langSolTwo"
                      placeholder="Language"
                      name="langSolTwo"
                      onChange={fieldChanged}
                      defaultValue={0}
                    >
                      <option disabled value={0}>
                        --language--
                      </option>
                      <option value={"java"}>Java</option>
                      <option value={"c++"}>C++</option>
                      <option value={"python"}>Python</option>
                    </Input>
                  </span>
                  <Card className="txtarea">
                    {/* <CustomEditor
                      id="solTwo"
                      name="solTwo"
                      onChange={fieldChanged}
                    /> */}
                    <Editor
                      apiKey="bgx3j6j885xiq1toxfp8jbpr389dyji48oc6mejvg4s557un"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      onEditorChange={setSolTwo}
                      id="solTwo"
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
                              alert(
                                "Text Selection Not Allowed\n\nReloading The Page...."
                              );
                              window.location.reload();
                              editor.setContent = "Your writings are Gone";
                              editor.initialValue = "Gone";
                              return false;
                            } else if (e.ctrlKey && e.code === "KeyS") {
                              console.log("CTRL + S");
                              alert("Text Saving Not Allowed");
                              return false;
                            } else if (
                              e.ctrlKey &&
                              e.shiftKey &&
                              e.code == "KeyI"
                            ) {
                              console.log("CTRL + SHIFT + I");
                              return false;
                            } else
                              console.log("keydown press detected" + e.code);
                          });
                        },
                        menubar: false,
                        plugins: [],
                        paste_preprocess: function (plugin, args) {
                          args.stopImmediatePropagation();
                          args.stopPropagation();
                          args.preventDefault();
                          console.log("Attempted to paste: ", args.content);
                          args.content = "";
                        },
                        contextmenu_never_use_native: true,
                        contextmenu: false,
                        toolbar: false,
                        statusbar: false,
                        auto_focus: true,
                        content_style: colour,
                      }}
                    />
                  </Card>
                </FormGroup>
                <FormGroup className="mt-2 solution hide" id="sol3">
                  <span className="langChoose ">
                    <Input
                      className="my-2 py-0"
                      style={{
                        width: "20%",
                        display: "inline-block",
                        textAlign: "center",
                        outline: "none",
                        border: "none",
                      }}
                      type="select"
                      id="langSolThree"
                      placeholder="Language"
                      name="langSolThree"
                      defaultValue={0}
                      onChange={fieldChanged}
                    >
                      <option disabled value={0}>
                        --language--
                      </option>
                      <option value={"java"}>Java</option>
                      <option value={"c++"}>C++</option>
                      <option value={"python"}>Python</option>
                    </Input>
                  </span>
                  <Card className="txtarea">
                    {/* <CustomEditor
                      id="solThree"
                      name="solThree"
                      onChange={fieldChanged}
                    /> */}
                    <Editor
                      apiKey="bgx3j6j885xiq1toxfp8jbpr389dyji48oc6mejvg4s557un"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      onEditorChange={setSolThree}
                      id="solThree"
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
                              alert(
                                "Text Selection Not Allowed\n\nReloading The Page...."
                              );
                              window.location.reload();
                              editor.setContent = "Your writings are Gone";
                              editor.initialValue = "Gone";
                              return false;
                            } else if (e.ctrlKey && e.code === "KeyS") {
                              console.log("CTRL + S");
                              alert("Text Saving Not Allowed");
                              return false;
                            } else if (
                              e.ctrlKey &&
                              e.shiftKey &&
                              e.code == "KeyI"
                            ) {
                              console.log("CTRL + SHIFT + I");
                              return false;
                            } else
                              console.log("keydown press detected" + e.code);
                          });
                        },
                        menubar: false,
                        plugins: [],
                        paste_preprocess: function (plugin, args) {
                          args.stopImmediatePropagation();
                          args.stopPropagation();
                          args.preventDefault();
                          console.log("Attempted to paste: ", args.content);
                          args.content = "";
                        },
                        contextmenu_never_use_native: true,
                        contextmenu: false,
                        toolbar: false,
                        statusbar: false,
                        auto_focus: true,
                        content_style: colour,
                      }}
                    />
                  </Card>
                </FormGroup>
              </Card>
            </CardGroup>
            <div className="text-center">
              <Button
                color="success"
                style={{
                  marginTop: "-30px",
                  minHeight: "30px",
                }}
                onClick={submitForm}
              >
                SUBMIT ASSESMENT
              </Button>
            </div>
          </form>
          {/* {JSON.stringify(language)} */}
        </CardBody>
      </Card>

      <div className="notice text-center" id="notice">
        <Button onClick={viewTest} color="primary" className="noticeButton">
          I Understand, Take Assessment
        </Button>
      </div>

      <div className="revealer revealHidden" id="revealer">
        <CardGroup>
          <Card>
            <CardHeader>Solution 1</CardHeader>
            <JoditEditor
              ref={editor}
              config={config}
              className="joditStyle"
              value={content.solutionQ1}
            />
          </Card>
          <Card>
            <CardHeader>Solution 2</CardHeader>
            <JoditEditor
              style={{ minWidth: "30vw" }}
              ref={editor}
              config={config}
              className="joditStyle"
              value={content.solutionQ2}
            />
          </Card>
          <Card>
            <CardHeader>Solution 3</CardHeader>
            <JoditEditor
              ref={editor}
              config={config}
              className="joditStyle"
              value={content.solutionQ3}
            />
          </Card>
        </CardGroup>
      </div>
    </div>
  );
  {
    document.getElementsByClassName("jodit-wysiwyg").style.color =
      "transparent";
  }
};

export default Bisector;
