import React from "react";
import Base from "../components/Base";
import {
    Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const Register = () => {
  return (
    <Base>
      <Container className="mt-5">
        <Row className="mt-4">
          <Col sm={{ size: 5, offset: 3}}>
            <Card className="mt-5 text-center"> 
              <CardHeader>User Registration</CardHeader>
              <CardBody className="mt-2">
                <Form>
                  <FormGroup>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create Password"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="branch"
                      type="select"
                      placeholder="Select Branch"
                      defaultValue={0}
                    ><option disabled value={0}>
                      Select Branch
                    </option>
                    <option value={"MCA"}>MCA</option>
                    <option value={"B.Tech"}>BTECH</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="sem"
                      type="select"
                      placeholder="Select Sem"
                      defaultValue={0}
                    ><option disabled value={0}>
                      Select Sem
                    </option>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                    <option value={"5"}>5</option>
                    <option value={"6"}>6</option>
                    <option value={"7"}>7</option>
                    <option value={"8"}>8</option>
                    </Input>
                  </FormGroup>
                  <Button>Register</Button>
                </Form>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Register;
