import React from "react";
import Base from "../components/Base";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Login = () => {
  return (
    <Base>
      <div
        className=""
        style={{
          minHeight: "80vh",
          minWidth: "90vw",
          display: "flex",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Card
          className="mt-4 text-center"
          style={{
            minHeight: "32vh",
            minWidth: "25vw",
            display: "flex",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <CardHeader style={{ minWidth: "25vw" }}>USER LOGIN</CardHeader>
          <CardBody
            className="mt-2"
            style={{ minHeight: "100px", maxHeight: "200px", minWidth: "25vw" }}
          >
            <Form className="">
              <FormGroup>
                {/* <Label for="email">Username</Label> */}
                <Input
                  style={{ outline: "none" }}
                  id="email"
                  type="email"
                  placeholder="user@name.here"
                ></Input>
              </FormGroup>
              <FormGroup>
                {/* <Label for="password">Password</Label> */}
                <Input
                  style={{ outline: "none" }}
                  id="password"
                  type="password"
                  placeholder="***********"
                ></Input>
              </FormGroup>
              <Button color="primary" className="primary">
                Login
              </Button>
            </Form>
          </CardBody>

          <CardFooter style={{ minWidth: "25vw" }}></CardFooter>
        </Card>
      </div>
    </Base>
  );
};

export default Login;
