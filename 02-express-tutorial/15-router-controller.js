const { people } = require("../data");

// seperating ID's from the username
const peopleIds = people.map((person) => person.id);

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
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
};

const createPersonPostman = (req, res) => {
  const userName = req.body.name;
  if (!userName) {
    res
      .status(400)
      .send({ success: false, msg: "please provide a name value" });
    return;
  }
  res.status(201).send({ success: true, people: [...people], userName });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  if (peopleIds?.includes(Number(id))) {
    const updatePeople = people.filter((person) => person.id !== Number(id));
    res.status(203).json({ success: true, data: updatePeople });
  } else {
    res.status(404).json({ success: false, msg: "No Resources Found" });
  }
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
