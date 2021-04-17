import mongoose from "mongoose";
import config from "config";

console.log(`${config.get("database.url")}/${config.get("database.name")}`);

mongoose.connect(
  `${config.get("database.url")}/${config.get("database.name")}`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);
