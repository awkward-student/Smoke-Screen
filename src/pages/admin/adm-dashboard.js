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
  const [currentPage, setCurrentPage] = useState(0);

  const changePage = (pageNumber = 0) => {
    if (pageNumber > solutions.pageNumber && solutions.lastPage) return;
    if (pageNumber < solutions.pageNumber && solutions.pageNumber == 0) return;
    loadAllSubmissions(pageNumber, 1)
      .then((data) => {
        console.log(data);
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

  // Loading all submissions on load of the component
  useEffect(() => {
    changePage(0);
  }, []);

  const loginOperation = () => {};

  const registerOperation = () => {};

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
              <Button onClick={loginOperation} id="loginOps"></Button>
              <Button onClick={registerOperation} id="registerOps"></Button>
            </span>
          </div>
        </Container>
      </Container>
    </Base>
  );
};

export default AdminDashboard;
