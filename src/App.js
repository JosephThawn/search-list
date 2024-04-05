import React, { useState } from "react";
import {
  Container,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { data } from "./data";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", my: 5, textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography variant="h3" co sx={{ p: 5 }}>
          Contact List
        </Typography>
        <TextField
          fullWidth
          label="Search contacts"
          variant="outlined"
          sx={{ mb: 2 }} // Add margin below the search field
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  First Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Last Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Email
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((item) => {
                  const searchLowerCase = search.toLowerCase();
                  return (
                    searchLowerCase === "" ||
                    item.first_name.toLowerCase().includes(searchLowerCase) ||
                    item.last_name.toLowerCase().includes(searchLowerCase)
                  );
                })
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.first_name}</TableCell>
                    <TableCell>{item.last_name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default App;
