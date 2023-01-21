const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect(`mongodb://localhost:27017/doctorappointment`);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
