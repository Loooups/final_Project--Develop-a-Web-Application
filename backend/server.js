const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/api/studies", require("./routes/studies.routes.js"));

app.use("/api/patients", require("./routes/patients.routes.js"));

app.use("/api/physicians", require("./routes/physicians.routes.js"));

app.use(express.json());

app.listen(port, () => console.log("Server started on port " + port));
