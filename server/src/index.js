const express = require("express");
const cors = require("cors");
const path = require("path");
const server = express();
server.use(cors());
server.use(express.json());
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

server.get("/card/:id", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});
server.post("/card", (req, res) => {
  console.log(req.body);
  const response = {};
  if (!req.body.name) {
    response.success = false;
    response.error = "Missing name parameter";
  } else if (!req.body.job) {
    response.success = false;
    response.error = "Missing job parameter";
  } else if (!req.body.email) {
    response.success = false;
    response.error = "Missing email parameter";
  } else if (!req.body.photo) {
    response.success = false;
    response.error = "Missing photo parameter";
  } else {
    // All is fine
    // Save to db
    response.success = true;
    response.cardURL = "https://TODO-HA-IDO-BIEN.com";
  }
  res.json(response);
});
// not found error
server.get("*", (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
