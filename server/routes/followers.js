const router = require("express").Router();
const Query = require("../utils/mysql");
const  authorize  = require("../middleWares/authorize");

router.post("/follow", authorize, async (req, res) => {
  const { vacationID } = req.body;
  const userID = req.user.id;
  const follow_q = `insert into followers (vacationID, followerID)
    values (?, ?)`;
  try {
    await Query(follow_q, vacationID, userID);
    res.sendStatus(201);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/remove", authorize, async (req, res) => {
  const { vacationID } = req.query;
  const userID = req.user.id;
  const remove_q = `delete from followers where vacationID = ? and followerID = ?`;
  try {
    await Query(remove_q, vacationID, userID);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
