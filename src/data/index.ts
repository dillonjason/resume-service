import mongoose from "mongoose";
import config from "config";

export default function (): void {
  mongoose.connect(
    config.get("database.url"),
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      auth: {
        user: config.get("database.user"),
        password: config.get("database.password"),
      },
      dbName: config.get("database.name"),
    },
    (error) => {
      if (error) {
        console.error(error);
      }
    }
  );
}
