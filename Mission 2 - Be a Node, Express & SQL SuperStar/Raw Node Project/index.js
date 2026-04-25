/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 */

// Dependencies
const http = require("http");

// AppObject - ModuleScaffolding
const app = {};

// Configuration
app.config = {
  port: 3000,
};

// CreateServer
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to port ${app.config.port}`);
  });
};

// HandleRequestResponse
app.handleReqRes = (req, res) => {
  // ResponseHandle
  res.end("Hi Programmers!");
};

// StartTheServer
app.createServer();
