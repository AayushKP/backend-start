require("dotenv").config();
const express = require("express");
// above line is same as : import express from "express";

const app = express();
//app contains many utilities which we can get by using .operator
const port = 4000;

const githubData = {
  login: "hiteshchoudhary",
  id: 11613311,
  node_id: "MDQ6VXNlcjExNjEzMzEx",
  avatar_url: "https://avatars.githubusercontent.com/u/11613311?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hiteshchoudhary",
  html_url: "https://github.com/hiteshchoudhary",
  followers_url: "https://api.github.com/users/hiteshchoudhary/followers",
  following_url:
    "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  gists_url: "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/hiteshchoudhary/subscriptions",
  organizations_url: "https://api.github.com/users/hiteshchoudhary/orgs",
  repos_url: "https://api.github.com/users/hiteshchoudhary/repos",
  events_url: "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/hiteshchoudhary/received_events",
  type: "User",
  site_admin: false,
  name: "Hitesh Choudhary",
  company: null,
  blog: "https://www.youtube.com/c/HiteshChoudharydotcom",
  location: "India",
  email: null,
  hireable: null,
  bio: "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  twitter_username: "hiteshdotcom",
  public_repos: 82,
  public_gists: 4,
  followers: 17639,
  following: 0,
  created_at: "2015-03-23T13:03:25Z",
  updated_at: "2024-02-12T12:11:50Z",
};

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

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
//This method tells the Express application to start a server and listen for incoming connections on the specified port. The port variable represents the port number on which the server will listen for incoming requests.

//Callback function gets executed once the server starts listening for requests. In this case, it logs a message to the console indicating that the server is now listening on the specified port
