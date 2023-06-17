import JoditEditor from "jodit-react";
import React, { useRef, useEffect } from "react";
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

const Bisector = () => {
  {
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script>
        {$(window).on("keydown", function (event) {
          if (event.code == "F12") {
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
    color: "transparent",
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

  const editor = useRef(null);

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
        Hello
        <Button color="success" className="reveal">
          Reveal Code
        </Button>
      </Navbar>
      <Card className="codeBookCard" style={{ border: "none" }}>
        <CardBody className="formCard mt-0 mb-4">
          <form className="formX" action="">
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
                      id="lang1"
                      placeholder="Language"
                      name="lang1"
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
                    <CustomEditor id="ta1" />
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
                      id="lang2"
                      placeholder="Language"
                      name="lang2"
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
                    <CustomEditor id="ta2" />
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
                      id="lang3"
                      placeholder="Language"
                      name="lang3"
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
                    <CustomEditor id="ta3" />
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
              >
                SUBMIT ASSESMENT
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
  {
    document.getElementsByClassName("jodit-wysiwyg").style.color =
      "transparent";
  }
};

export default Bisector;
