import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import Config from "./config/config";
import apiRouter from "./routes/router";

const { DB, PORT } = Config;

// Connect to the database
mongoose.connect(DB.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialization of the http server
const app = express();

app.use(cors());
app.use(helmet());

// Body parser for requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use v1 as a prefix for the API
app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port `, PORT);
});
