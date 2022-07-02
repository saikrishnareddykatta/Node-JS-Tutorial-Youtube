const express = require("express");
const app = express();
const { people } = require("./data");

// we will 304 status code when there is no change in our response
// it compares two eTag values and if there is no change then it wont call the new respose
// app.disable("etag");

// static files
app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// seperating ID's from the username
const peopleIds = people.map((person) => person.id);

app.post("/login", (req, res) => {
  // I have entered name Robin and clicked submit button but
  // if we are trying the req.body here we are getting the value as undefined
  // by default req.body gives us undefined, it will only provide body when use of middleware functions like
  // express.json() or express.urlencoded()
  //console.log(req.body);
  const { userName } = req.body;
  if (userName) {
    console.log(userName);
    res.send(`Welcome ${userName}`);
    return;
  }
  res.status(401).send("Please Provide Credentials");
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const userName = req.body.name;
  // const data = {
  //   person: userName,
  // };
  if (userName) {
    console.log(req.body);
    res.status(201).json({ sucess: true, person: userName });
  } else {
    res
      .status(400)
      .json({ success: false, msg: "Please provide a name value" });
  }
});

app.post("/api/postman/people", (req, res) => {
  const userName = req.body.name;
  if (!userName) {
    res
      .status(400)
      .send({ success: false, msg: "please provide a name value" });
    return;
  }
  res.status(201).send({ success: true, people: [...people], userName });
});

app.put("/api/people/:id", (req, res) => {
  const id = req.params.id;
  const { personName } = req.body;
  if (peopleIds?.includes(Number(id))) {
    if (personName) {
      const updatePeople = people.map((person) => {
        if (person.id === Number(id)) {
          // person.name = personName;
          return { ...person, name: personName };
        }
        return person;
      });
      res.status(202).json({ success: true, data: updatePeople });
      return;
    }
    res
      .status(400)
      .json({ success: false, msg: "please enter name value", data: [] });
  } else {
    res.status(404).json({ success: false, msg: "No Resources Found" });
  }
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  if (peopleIds?.includes(Number(id))) {
    const updatePeople = people.filter((person) => person.id !== Number(id));
    res.status(203).json({ success: true, data: updatePeople });
  } else {
    res.status(404).json({ success: false, msg: "No Resources Found" });
  }
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000....");
});
