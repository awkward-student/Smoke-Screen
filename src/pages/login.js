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
      <div className="mt-5">
        <Row className="mt-4">
          <Col sm={{ size: 7, offset: 4 }}>
            <Card
              className="mt-4 text-center"
              style={{ maxWidth: "50%", maxHeight: "100%" }}
            >
              <CardHeader>
                User Login
              </CardHeader>
              <CardBody className="mt-2" style={{ minHeight: "100px", maxHeight:"200px"}}>
                <Form className="">
                  <FormGroup>
                    {/* <Label for="email">Username</Label> */}
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@name.here"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="password">Password</Label> */}
                    <Input
                      id="password"
                      type="password"
                      placeholder="***********"
                    ></Input>
                  </FormGroup>
                  <Button className="primary">Login</Button>
                </Form>
              </CardBody>

              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </Base>
  );
};

export default Login;
