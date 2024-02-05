import { config } from "dotenv";

config();

const Config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB: {
    CONNECTION_STRING: process.env.CONNECTION_STRING,
  },
};

export default Config;
