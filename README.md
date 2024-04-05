# Creating a Contact List with Search Functionality in React

This guide will walk you through the process of creating a simple contact list application in React. The application will feature a dynamic search bar that filters the contact list based on user input, allowing for searches by first name or last name.

## Prerequisites

- Basic knowledge of React and JavaScript
- Node.js and npm installed on your machine
- Bootstrap for React installed (`react-bootstrap`)

## Step 1: Setting Up Your Project

1. **Create a New React App:**
   If you haven't already created your React app, you can do so by running the following command in your terminal:

   ```bash
   npx create-react-app contact-list-app
   ```

2. **Navigate to Your App Directory:**

   ```bash
   cd contact-list-app
   ```

3. **Install React Bootstrap:**
   For styling, we'll use React Bootstrap. Install it by running:

   ```bash
   npm install react-bootstrap bootstrap
   ```

## Step 2: Preparing Your Data

1. **Create a Data File:**
   In your project's `src` directory, create a file named `data.js`. This file will contain an array of contact objects.

2. **Add Sample Data:**
   Inside `data.js`, define and export your contact data as follows:

   ```javascript
   export const data = [
     { first_name: "John", last_name: "Doe", email: "john.doe@example.com", phone: "123-456-7890" },
     // Add more contact objects as needed
   ];
   ```

## Step 3: Building the Contact List UI

1. **Import Dependencies:**
   Open your `App.js` file and import the necessary components and styles at the top:

   ```javascript
   import React, { useState } from "react";
   import Container from "react-bootstrap/Container";
   import Form from "react-bootstrap/Form";
   import Table from "react-bootstrap/Table";
   import InputGroup from "react-bootstrap/InputGroup";
   import { data } from "./data.js";
   import "bootstrap/dist/css/bootstrap.min.css";
   ```

2. **Initialize State:**
   Within your `App` function component, use the `useState` hook to create a state variable for the search input:

   ```javascript
   const [search, setSearch] = useState("");
   ```

3. **Build the UI:**
   Construct your application's UI with a search bar and a table for displaying contacts:

   ```jsx
   return (
     <div className="App">
       <Container>
         <h1 className="text-center mt-3">Contact List</h1>
         <div style={{ maxWidth: "50%", margin: "0 auto" }}> {/* Adjust search bar size and alignment */}
           <InputGroup className="mb-3">
             <Form.Control
               onChange={(e) => setSearch(e.target.value)}
               placeholder="Search contacts"
             />
           </InputGroup>
         </div>
         <Table striped bordered hover>
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Phone</th>
             </tr>
           </thead>
           <tbody>
             {/* Contact rows will be inserted here */}
           </tbody>
         </Table>
       </Container>
     </div>
   );
   ```

## Step 4: Implementing the Search Functionality

1. **Filter Contacts:**
   Inside the `tbody` element of your table, use the `map` function to iterate over your contacts data. Apply the `filter` method first to include only those contacts that match the search query:

   ```jsx
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
       <tr key={index}>
         <td>{item.first_name}</td>
         <td>{item.last_name}</td>
         <td>{item.email}</td>
         <td>{item.phone}</td>
       </tr>
     ))}
   ```

2. **Adjust Search Bar Size:**
   If you want to make the search bar shorter, adjust the `maxWidth` in the `style` prop of the `div` wrapping your `InputGroup`.

## Conclusion

You've now created a simple contact list application with a search functionality using React and React Bootstrap. The search bar dynamically filters the displayed contacts based on user input, enhancing the usability of your application.
