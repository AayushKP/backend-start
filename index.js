require("dotenv").config();
const express = require("express");
// above line is same as : import express from "express";

const app = express();
//app contains many utilities which we can get by using .operator
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitter.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login here</h1>");
});

//req- request and res - response
// in other words this code sets up a route that responds with "Hello World!" when a user makes a GET request to the root URL of your Node.js/Express application

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
//This method tells the Express application to start a server and listen for incoming connections on the specified port. The port variable represents the port number on which the server will listen for incoming requests.

//Callback function gets executed once the server starts listening for requests. In this case, it logs a message to the console indicating that the server is now listening on the specified port
