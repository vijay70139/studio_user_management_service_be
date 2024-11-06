require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth"); 
require("./mongo");


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", authRoute); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error(err);
});
