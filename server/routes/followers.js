const router = require("express").Router();
const Query = require("../mysql/index");
const authJwt  = require("../middleWares/authJwt");

router.post("/follow", authJwt, async (req, res) => {
  const { vacationID } = req.body;
  const userID = req.userId;
  const follow_q = `insert into followers (vacationID, followerID)
    values (?, ?)`;
  try {
    await Query(follow_q, vacationID, userID);
    res.status(201).send({message: `VacationID: ${vacationID} followed`});
  } catch (err) {
    res.status(400).send({error: err.message});
  }
});

router.delete("/remove", authJwt, async (req, res) => {
  const { vacationID } = req.query;
  const userID = req.userId;
  const remove_q = `delete from followers where vacationID = ? and followerID = ?`;
  try {
    await Query(remove_q, vacationID, userID);
    res.status(204).send({message: "UnFollow"});
  } catch (err) {
    res.status(400).send({error: err.message});
  }
});

module.exports = router;
