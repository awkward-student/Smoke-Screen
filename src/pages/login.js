import React, { useState } from "react";
import Base from "../components/Base";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { toast } from "react-toastify";
import { LoginUser } from "../services/user-service";
import { doLogin, getCurrentUserProfile } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

  // useEffect(()=>{
  //   window.location.reload();
  // },[])

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  //handle change
  const handleChange = (e, prop) => {
    setCredentials({ ...credentials, [prop]: e.target.value });
  };

  //submit form
  const submitForm = (e) => {
    e.preventDefault();
    if (
      credentials.username.trim() === "" ||
      credentials.password.trim() === ""
    ) {
      toast.error("Both username & password is required");
      return;
    }
    //submit data to server
    LoginUser(credentials)
      .then((res) => {
        if (res == undefined) {
          toast.error("Login Failed : Can login only once.");
          // window.location.reload(true);
        }
        doLogin(res, () => {
          toast.success("Login Successfull");
          if (getCurrentUserProfile() == "ROLE_ADMIN") {
            navigate("/admin/dashboard");
          } else {
            navigate("/user/dashboard");
          }
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.message == "Network Error" && error.name == "AxiosError") {
          toast.error("Login Failed : Can login only once.");
          setTimeout(() => {
            window.location.reload(true);
          }, 5000);
        }
        toast.error("Login Failed : " + error.response.data.message);
        setCredentials({
          username: "",
          password: "",
        });
      });
  };

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
            <Form onSubmit={submitForm}>
              <FormGroup>
                {/* <Label for="email">Username</Label> */}
                <Input
                  style={{ outline: "none" }}
                  id="email"
                  type="email"
                  placeholder="user@name.here"
                  onChange={(e) => handleChange(e, "username")}
                  value={credentials.username}
                ></Input>
              </FormGroup>
              <FormGroup>
                {/* <Label for="password">Password</Label> */}
                <Input
                  style={{ outline: "none" }}
                  id="password"
                  type="password"
                  placeholder="***********"
                  onChange={(e) => handleChange(e, "password")}
                  value={credentials.password}
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
