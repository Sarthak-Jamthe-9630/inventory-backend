const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas Connection
mongoose.connect("mongodb+srv://thinkingspeaker:ayvkw83pa2@clusterimd.57hvroq.mongodb.net/inventory?retryWrites=true&w=majority&appName=ClusterIMD", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Atlas connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
