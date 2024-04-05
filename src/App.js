import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import { data } from "./data.js";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-3">Contact List</h1>
        <div style={{ maxWidth: "80%" }}>
          {" "}
          {/* Inline styling for centering */}
          <InputGroup className="my-5">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </InputGroup>
        </div>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              //searach only by lowercase
              // .filter((item) => {
              //   const searchLowerCase = search.toLowerCase();
              //   return searchLowerCase === ""
              //     ? item
              //     : item.first_name.toLowerCase().includes(search) ||
              //         item.last_name.toLowerCase().includes(search);
              // })
              //searching by either lowercase or uppercase
              .filter((item) => {
                const searchLowerCase = search.toLowerCase();
                return (
                  searchLowerCase === "" ||
                  item.first_name.toLowerCase().includes(searchLowerCase) ||
                  item.last_name.toLowerCase().includes(searchLowerCase)
                );
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
