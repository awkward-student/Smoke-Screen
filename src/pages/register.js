import React, { useState } from "react";
import Base from "../components/Base";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { RegisterUser } from "../services/user-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "0",
    sem: "0",
  });

  //handle change
  const handleChange = (e, prop) => {
    setUserData({ ...userData, [prop]: e.target.value });
  };

  const navigate = useNavigate();

  //submit form
  const submitForm = (e) => {
    e.preventDefault();
    RegisterUser(userData)
      .then((res) => {
        toast.success("Successfully Registered");
        setUserData({
          name: "",
          email: "",
          password: "",
          branch: "",
          sem: "0",
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.name);
        toast.error(error.response.data.email);
        toast.error(error.response.data.password);
        toast.error(error.response.data.branch);
        toast.error(error.response.data.sem);
      });
  };

  return (
    <Base>
      <Container
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
          className="mt-5 text-center"
          style={{
            minHeight: "32vh",
            minWidth: "30vw",
            display: "flex",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          {/* {JSON.stringify(userData)} */}
          <CardHeader style={{ minWidth: "30vw" }}>
            USER REGISTRATION
          </CardHeader>
          <CardBody style={{ minWidth: "30vw" }} className="mt-2">
            <Form onSubmit={submitForm}>
              <FormGroup>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => handleChange(e, "name")}
                  value={userData.name}
                  // required
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  onChange={(e) => handleChange(e, "email")}
                  value={userData.email}
                  // required
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create Password"
                  onChange={(e) => handleChange(e, "password")}
                  value={userData.password}
                  // required
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  id="branch"
                  type="select"
                  placeholder="Select Branch"
                  // defaultValue={0}
                  onChange={(e) => handleChange(e, "branch")}
                  value={userData.branch}
                  // required
                >
                  <option disabled value={0}>
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
                  // defaultValue={0}
                  onChange={(e) => handleChange(e, "sem")}
                  value={userData.sem}
                  // required
                >
                  <option disabled value={0}>
                    Select Semester
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
              <Button color="primary">Register</Button>
            </Form>
          </CardBody>
          <CardFooter style={{ minWidth: "30vw" }}></CardFooter>
        </Card>
      </Container>
    </Base>
  );
};

export default Register;
