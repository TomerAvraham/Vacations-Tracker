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
    res.status(201).send({ vacationID: vacationID });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.delete("/unfollow/:vacationID", authJwt, async (req, res) => {
  const { vacationID } = req.params;
  const userID = req.user.id;
  const remove_q = `delete from followers where vacationID = ? and followerID = ?`;
  try {
    await Query(remove_q, vacationID, userID);
    res.status(200).send({ vacationID: vacationID });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/all", authJwt, async (req, res) => {
  const query = `select vacations.destination as name,
  count(followerID) as followers from vacations 
  LEFT join followers on vacations.id = followers.vacationID
  group by vacations.id`;
  try {
    const vacationByFollowers = await Query(query);
    res.status(200).send({ data: vacationByFollowers });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
