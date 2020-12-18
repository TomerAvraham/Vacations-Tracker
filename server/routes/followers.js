const router = require("express").Router();
const Query = require("../mysql/index");
const authJwt = require("../middleWares/authJwt");

router.post("/follow/:vacationID", authJwt, async (req, res) => {
  const { vacationID } = req.params;
  const userID = req.user.id;
  const follow_q = `insert into followers (vacationID, followerID)
    values (?, ?)`;
  try {
    await Query(follow_q, vacationID, userID);
    res.status(201).send({ message: `VacationID: ${vacationID} followed` });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.delete("/remove", authJwt, async (req, res) => {
  const { vacationID } = req.query;
  const userID = req.user.id;
  const remove_q = `delete from followers where vacationID = ? and followerID = ?`;
  try {
    await Query(remove_q, vacationID, userID);
    res.status(200).send({ message: "UnFollow" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
