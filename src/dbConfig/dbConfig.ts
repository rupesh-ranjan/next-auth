import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to the database");
    });

    connection.on("error", (error) => {
      console.log(
        "Monogodb connection error, please make sure db is up and running" +
          error
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong with the database connection");
    console.log(error);
  }
}
