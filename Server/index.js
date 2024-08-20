const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// initial
app.get("/", (req, res) => {
  res.send("coffee store server is runing");
});

app.listen(port, () => {
  console.log(`Coffee server is runing on port : ${port}`);
});
