/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 */

// Dependencies
const http = require("http");
const { buffer } = require("stream/consumers");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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
  // RequestHandle

  // GetTheUrlAndParseIt
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+&/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    console.log(realData);

    // ResponseHandle
    res.end("Hi Programmers!");
  });
};

// StartTheServer
app.createServer();
