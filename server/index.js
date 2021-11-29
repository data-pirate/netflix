const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

// database connection
mongoose
  .connect(process.env.DB_LINK)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

// express obj
const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
