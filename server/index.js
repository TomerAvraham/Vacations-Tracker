require("./mysql/index");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/vacations", require("./routes/vacations"));
app.use("/api/followers", require("./routes/followers"));

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
