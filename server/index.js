const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8000 });

wss.on("connection", (ws) => {
  console.log("new connection");

  ws.on("message", (data, isBinary) => {
    console.log(data);
    ws.send(data.toUpperCase());
  });
});
