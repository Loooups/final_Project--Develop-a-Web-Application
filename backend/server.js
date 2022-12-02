const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/dataBase.js");

connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/studies", require("./routes/studies.routes.js"));

app.use("/api/patients", require("./routes/patients.routes.js"));

app.use("/api/cras", require("./routes/cras.routes.js"));

app.use("/api/users", require("./routes/user.routes.js"));

app.listen(port, () => console.log("Server started on port " + port));
