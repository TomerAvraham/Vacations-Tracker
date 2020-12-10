const router = require("express").Router();
const Query = require("../mysql/index");
const authJwt = require("../middleWares/authJwt");
const authAdmin = require("../middleWares/authAdmin");

router.get("/all", authJwt, async (req, res) => {
  const vacation_q = `select vacations.id, vacations.description, vacations.destination,
    photoUrl, price, fromDate, toDate, 
    count(followerID) as followers
     from vacations LEFT join followers on vacations.id = followers.vacationID
     group by vacations.id`;
  try {
    const vacations = await Query(vacation_q);
    res.status(200).send({vacations: vacations});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});

router.post("/add", authAdmin, async (req, res) => {
  const {
    description,
    destination,
    photoUrl,
    price,
    fromDate,
    toDate,
  } = req.body;
  const addingVacation_q = `insert into vacations (description, destination, photoUrl, price, fromDate, toDate)
    values (?, ?, ?, ?, ?, ?)`;
  try {
    await Query(
      addingVacation_q,
      description,
      destination,
      photoUrl,
      price,
      fromDate,
      toDate
    );
    res.status(201).send({message: "Add vacation successfully"});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});

router.put("/edit/:id", authAdmin, async (req, res) => {
  const {
    description,
    destination,
    photoUrl,
    price,
    fromDate,
    toDate,
  } = req.body;
  const { id } = req.params;
  const editVacation_q = `update vacations set description = ?, destination = ?, photoUrl = ?, fromDate = ?, 
    toDate = ? where vacations.id = ${id}`;
  try {
    await Query(
      editVacation_q,
      description,
      destination,
      photoUrl,
      price,
      fromDate,
      toDate
    );
    res.status(204).send({message: "Vacation edit successfully"});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});

router.delete("/delete/:id", authAdmin, async (req, res) => {
  const { id } = req.params;
  const delete_q = `delete from vacations where id = ${id}`;
  try {
    await Query(delete_q);
    res.status(204).send({message: "Vacation deleted successfully"});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});

module.exports = router;
