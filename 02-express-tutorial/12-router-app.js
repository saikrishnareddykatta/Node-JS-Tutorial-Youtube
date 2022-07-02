const express = require("express");
const app = express();
const peopleRoutes = require("./routes/people");
const loginRoute = require("./routes/auth");

// we will 304 status code when there is no change in our response
// it compares two eTag values and if there is no change then it wont call the new respose
// app.disable("etag");

// static files
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// A base URL is provided, the peopleRoute will be used only by /api/people route
app.use("/api/people", peopleRoutes);
// a base URL is provided, the loginRoute will be used only by /logim
app.use("/login", loginRoute);

app.listen(5000, () => {
  console.log("Server is listening on Port 5000....");
});
