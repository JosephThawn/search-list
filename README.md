# Creating a Contact List with Search Functionality in React using Material UI

In this guide, we'll walk through the process of creating a contact list application in React. This application will feature a dynamic search functionality that allows users to filter contacts by first name or last name. We'll be using Material UI components to build a sleek and responsive user interface.

## Prerequisites

- Basic understanding of React and JavaScript
- Node.js and npm installed on your machine
- Material UI installed in your React project

## Setting Up Your Project

To get started, ensure you have a React application created. If you haven't set up a project yet, you can quickly create one with `create-react-app`. Additionally, you'll need to install Material UI in your project:

```bash
npx create-react-app contact-list-material-ui
cd contact-list-material-ui
npm install @mui/material @mui/icons-material
```

## Preparing Your Data

Inside your project's `src` directory, create a file named `data.js` to hold your contacts array. Populate it with sample contact data structured like so:

```javascript
export const data = [
  { id: 1, first_name: "John", last_name: "Doe", email: "john.doe@example.com", phone: "123-456-7890" },
  // Add more contacts as needed
];
```

## Building the Contact List Component

Open or create the `App.js` file and start by importing React hooks, Material UI components, and the data from `data.js`:

```javascript
import React, { useState } from "react";
import { Container, TextField, Box, Typography, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "./data";
```

### Initialize State

Within the `App` component, initialize a state variable to keep track of the search input:

```javascript
const [search, setSearch] = useState("");
```

### Styling the Headers

Define a style for the DataGrid headers to make them bold and visible:

```javascript
const boldHeaderStyle = {
  fontWeight: "bold",
  color: "#333",
  fontSize: "16px",
};
```

### Defining Columns

Specify the columns for your DataGrid component, including the fields you want to display:

```javascript
const columns = [
  { field: "first_name", headerName: "First Name", flex: 1 },
  { field: "last_name", headerName: "Last Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
];
```

### Filtering Contacts

Implement the logic to filter your contacts based on the search input:

```javascript
const filteredRows = data.filter((row) => {
  const searchLowerCase = search.toLowerCase();
  return (
    searchLowerCase === "" ||
    row.first_name.toLowerCase().includes(searchLowerCase) ||
    row.last_name.toLowerCase().includes(searchLowerCase)
  );
});
```

### Building the UI

Construct the UI using Material UI components, ensuring to include a TextField for the search bar adorned with a search icon, and a DataGrid to display the filtered contacts:

```jsx
return (
  <Box sx={{ maxWidth: "80%", margin: "auto", my: 5, textAlign: "center" }}>
    <Container maxWidth="md">
      <Typography variant="h3" sx={{ my: 3 }}>Contact List</Typography>
      <TextField
        fullWidth
        label="Search contacts"
        variant="outlined"
        sx={{ mb: 2 }}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Paper sx={{ height: 440, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeaderTitle": boldHeaderStyle,
            padding: "10px",
          }}
        />
      </Paper>
    </Container>
  </Box>
);
```

## Conclusion

You have now created a functional contact list application with search functionality using React and Material UI. This example demonstrates how to effectively use Material UI components to build an intuitive and visually appealing UI, along with React's state management to dynamically filter data based on user input.
