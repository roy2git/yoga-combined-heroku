const express = require("express");
const server = express();
const mongoose = require("mongoose");
const path = require("path");

//const morgan = require("morgan");
const cors = require("cors");

//server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
//server.use("/", (req, res) => console.log("Hi"));

const yogaPoseRouter = require("./routes/yogaPose.router");
server.use("/api", yogaPoseRouter);

const port = process.env.PORT || 5000;

//app.use(express.static(path.join(__dirname, "client", "build")));

server.listen(port, () => console.log(`Server running  localhost:${port}`));

// mongoose.connect("mongodb://localhost:27017/yogaDb", { useFindAndModify: false },(err) => {
//   if (!err) {
//     console.log("Connected Successfully");
//   }
// });

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
  server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://roy:Mankulam@cluster0-04dk7.mongodb.net/yogaDb?retryWrites=true&w=majority",
  { useFindAndModify: false, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connected Successfully");
    }
  }
);
