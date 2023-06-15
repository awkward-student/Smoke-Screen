import JoditEditor from "jodit-react";
import React, { useRef } from "react";
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
} from "reactstrap";

const Bisector = () => {
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
    <div className="codeBook mt-0 pt-1 mb-2">
      <Card className="shadow-sm mx-2 mt-5">
        <CardHeader>Code Book</CardHeader>
        <CardBody>
          <form action="">
            <CardGroup>
              <Card
                className="questionBox px-2"
                style={{ width: "50%", display: "flex" }}
              >
                <CardGroup className="questionToggler my-2">
                  <Card className="mx-1 my-1" style={{ border: "none" }}>
                    <Button
                      id="q1"
                      className="bg-dark"
                      style={{ backgroundColor: "transparent" }}
                      onClick={switchQuestion}
                    >
                      PROBLEM - 1
                    </Button>
                  </Card>
                  <Card className="mx-1 my-1" style={{ border: "none" }}>
                    <Button
                      id="q2"
                      className="bg-dark"
                      style={{ backgroundColor: "transparent" }}
                      onClick={switchQuestion}
                    >
                      STATEMENT - 2
                    </Button>
                  </Card>
                  <Card className="mx-1 my-1" style={{ border: "none" }}>
                    <Button
                      id="q3"
                      className="bg-dark"
                      style={{ backgroundColor: "transparent" }}
                      onClick={switchQuestion}
                    >
                      QUESTION - 3
                    </Button>
                  </Card>
                </CardGroup>
                <p id="que1" className="questionStatement">
                  <b>
                    <em>Question 1</em>
                  </b>
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam assumenda perspiciatis laborum recusandae! Quae
                  incidunt inventore numquam totam fugiat hic, nemo voluptatem
                  quod tempore alias autem, adipisci pariatur modi
                  exercitationem. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nobis eum, ex esse facilis eveniet iure
                  magnam dolores minima reiciendis fugiat quia! Iure rerum
                  voluptas debitis, harum reprehenderit magni fugiat similique?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas, eum? Facere laborum sint veritatis dolorem officia,
                  itaque quae beatae ea, tempora, dolores possimus quia expedita
                  temporibus doloribus quos eos nulla.
                </p>
                <p id="que2" className="questionStatement hide">
                  <b>
                    <em>Question 2</em>
                  </b>
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam assumenda perspiciatis laborum recusandae! Quae
                  incidunt inventore numquam totam fugiat hic, nemo voluptatem
                  quod tempore. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Temporibus obcaecati nihil rerum cumque
                  harum veniam adipisci quisquam quasi iste dolorum quo deleniti
                  labore laudantium ullam, reiciendis magnam iure sunt
                  doloribus? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet, harum neque reprehenderit nam accusamus aliquid
                  architecto eligendi asperiores illo ea alias consequatur,
                  cumque blanditiis necessitatibus ad reiciendis minima magni
                  optio?
                </p>
                <p id="que3" className="questionStatement hide">
                  <b>
                    <em>Question 3</em>
                  </b>
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam assumenda perspiciatis laborum recusandae! Quae
                  incidunt inventore numquam totam fugiat hic, nemo voluptatem
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur animi dicta nostrum cumque ipsa voluptate natus a
                  eligendi placeat vero dignissimos, illum minus rem at fuga
                  fugit amet ea praesentium! Voluptas, eum? Facere laborum sint
                  veritatis dolorem officia, itaque quae beatae ea, tempora,
                  dolores possimus quia expedita temporibus doloribus quos eos
                  nulla.
                </p>
              </Card>

              <Card
                className="solutionBox px-2"
                style={{ width: "50%", display: "flex" }}
              >
                <FormGroup className="solution" id="sol1">
                  <Label>Solution 1: </Label>
                  <Input
                    className="my-1 py-0"
                    style={{ width: "50%", display: "inline-block" }}
                    type="select"
                    id="lang1"
                    placeholder="Language"
                    // className="rounded-0"
                    name="lang1"
                    defaultValue={0}
                  >
                    <option disabled value={0}>
                      Language
                    </option>
                    <option value={"java"}>Java</option>
                    <option value={"c++"}>C++</option>
                    <option value={"python"}>Python</option>
                  </Input>
                  <JoditEditor
                    ref={editor}
                    config={config}
                    className="joditStyle"
                  />
                </FormGroup>
                <FormGroup className="solution hide" id="sol2">
                  <Label>Solution 2</Label>
                  <Input
                    className="my-1 py-0"
                    style={{ width: "50%", display: "inline-block" }}
                    type="select"
                    id="lang2"
                    placeholder="Language"
                    // className="rounded-0"
                    name="lang2"
                    defaultValue={0}
                  >
                    <option disabled value={0}>
                      Language
                    </option>
                    <option value={"java"}>Java</option>
                    <option value={"c++"}>C++</option>
                    <option value={"python"}>Python</option>
                  </Input>
                  <JoditEditor
                    className="joditStyle"
                    ref={editor}
                    config={config}
                  />
                </FormGroup>
                <FormGroup className="solution hide" id="sol3">
                  <Label>Solution 3</Label>
                  <Input
                    className="my-1 py-0"
                    style={{ width: "50%", display: "inline-block" }}
                    type="select"
                    id="lang3"
                    placeholder="Language"
                    // className="rounded-0"
                    name="lang3"
                    defaultValue={0}
                  >
                    <option disabled value={0}>
                      Language
                    </option>
                    <option value={"java"}>Java</option>
                    <option value={"c++"}>C++</option>
                    <option value={"python"}>Python</option>
                  </Input>
                  <JoditEditor
                    className="joditStyle"
                    ref={editor}
                    config={config}
                  />
                </FormGroup>
              </Card>
            </CardGroup>
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
