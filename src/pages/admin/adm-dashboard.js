/* eslint-disable */
import React, { useEffect, useState } from "react";
import Base from "../../components/Base";
import "../../App.css";
import { loadAllSubmissions } from "../../services/solution-service";
import Solution from "../../components/Solution";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Button,
} from "reactstrap";
import { toast } from "react-toastify";
import { doLogout } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import {
  getPermissions,
  updatePermission,
} from "../../services/permission-service";

const AdminDashboard = () => {
  // Variable to store all solutions
  const [solutions, setSolutions] = useState({
    content: [],
    pageNumber: "",
    pageSize: "",
    totalElements: "",
    totalPages: "",
    lastPage: false,
  });

  const navigate = useNavigate();

  // Current page variable
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(0);

  const changePage = (pageNumber = 0) => {
    if (pageNumber > solutions.pageNumber && solutions.lastPage) return;
    if (pageNumber < solutions.pageNumber && solutions.pageNumber === 0) return;
    loadAllSubmissions(pageNumber, 1)
      .then((data) => {
        setSolutions({
          content: [...data.content],
          pageNumber: data.pageNumber,
          pageSize: data.pageSize,
          totalElements: data.totalElements,
          totalPages: data.totalPages,
          lastPage: data.lastPage,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading submissions.");
      });
  };

  const performLogout = () => {
    doLogout(() => {
      toast.info("Logged out successfully.");
      navigate("/login");
    });
  };

  // variables to handle visiblity permissions
  const [loginColor, setLoginColor] = useState("");
  const [loginText, setLoginText] = useState("");
  const [signinColor, setSigninColor] = useState("");
  const [signinText, setSigninText] = useState("");

  // Loading all submissions on load of the component
  useEffect(() => {
    changePage(0);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (JSON.parse(localStorage.getItem("status"))[0].status === 0) {
        setLoginColor("success");
        setLoginText("Enable Login");
        setSigninColor("danger");
        setSigninText("Disable Signup");
      } else {
        setLoginColor("danger");
        setLoginText("Disable Login");
        setSigninColor("success");
        setSigninText("Enable Signup");
      }
    }, 500);
  }, []);

  // enable-disable login
  const pageOperations = () => {
    var lin = JSON.parse(localStorage.getItem("status"))[0].status;
    if (lin === 0) {
      // setting login true
      updatePermission(1, {
        status: 1,
      }).then((data) => {});
      // setting signup false
      updatePermission(2, {
        status: 0,
      }).then((data) => {});
    } else {
      // setting login false
      updatePermission(1, {
        status: 0,
      }).then((data) => {});
      // setting signup true
      updatePermission(2, {
        status: 1,
      }).then((data) => {});
    }

    // setting new data to the admin's browser local storage and reloading admin's dashboard
    getPermissions().then((data) => {
      console.log(data[0]); // Login
      console.log(data[1]); // Signup
      setStatus({
        LOGIN: data[0].status,
        SIGNUP: data[1].status,
      });
      localStorage.removeItem("status");
      localStorage.setItem("status", JSON.stringify(data));
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      toast.success("Permissions updated successfully");
      toast.info("Reload required to update preferences");
      toast.warn("Reloading...");
    });
  };

  // eslint-disable-next-line
  const [status, setStatus] = useState({
    LOGIN: "",
    SIGNUP: "",
  });

  // useEffect(() => {
  //   getPermissions().then((data) => {
  //     console.log(data[0]); // Login
  //     console.log(data[1]); // Signup
  //     setStatus({
  //       LOGIN: data[0].status,
  //       SIGNUP: data[1].status,
  //     });
  //     localStorage.removeItem("status");
  //     localStorage.setItem("status", JSON.stringify(data));
  //   });
  // }, []);

  // Main Page Body ----------------------------------------------

  return (
    <Base>
      <Container
        style={{
          minHeight: "80vh",
          minWidth: "90vw",
          display: "grid",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          marginTop: "12px",
        }}
      >
        {/* <h4>Total number of submissions : {solutions?.totalElements}</h4> */}
        {solutions?.content.map((solution) => (
          <Solution key={solution.id} solution={solution} />
        ))}
        {/* <Solution solution={solutions?.content}/> */}
        <Container className="mt-3 text-center">
          <Pagination>
            <PaginationItem
              onClick={() => changePage(solutions.pageNumber - 1)}
              disabled={solutions.pageNumber === 0}
            >
              <PaginationLink previous></PaginationLink>
            </PaginationItem>
            {[...Array(solutions.totalPages)].map((item, index) => (
              <PaginationItem
                onClick={() => changePage(index)}
                active={index === solutions.pageNumber}
                key={index}
              >
                <PaginationLink>{index + 1}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem
              onClick={() => changePage(solutions.pageNumber + 1)}
              disabled={solutions.lastPage}
            >
              <PaginationLink next></PaginationLink>
            </PaginationItem>
            <PaginationItem
              onClick={() => changePage(solutions.totalPages - 1)}
              disabled={solutions.lastPage}
            >
              <PaginationLink last></PaginationLink>
            </PaginationItem>
          </Pagination>
          <div className="admOptions">
            <Button color="primary" onClick={performLogout}>
              Logout
            </Button>
            <span>
              <Button
                className="mx-3"
                color={loginColor}
                onClick={pageOperations}
                id="loginOps"
              >
                {loginText}
              </Button>
              <Button
                color={signinColor}
                onClick={pageOperations}
                id="registerOps"
              >
                {signinText}
              </Button>
            </span>
          </div>
        </Container>
      </Container>
    </Base>
  );
};

export default AdminDashboard;
