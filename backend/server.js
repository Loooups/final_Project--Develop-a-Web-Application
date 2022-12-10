const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddelware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/dataBase.js");
const cors = require("cors");

connectDB();

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/studies", require("./routes/studies.routes.js"));

app.use("/api/patients", require("./routes/patients.routes.js"));

app.use("/api/logbooks", require("./routes/logbooks.routes.js"));

app.use("/api/users", require("./routes/users.routes.js"));

app.use(errorHandler);

app.listen(port, () => console.log("Server started on port " + port));
