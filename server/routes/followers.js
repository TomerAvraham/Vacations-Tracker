const router = require('express').Router()
const Query = require('../helpers/mysql')
const {authenticateToken} = require('../auth/verification')

router.post('/follow', authenticateToken, async (req, res) => {
    const {vacationID} = req.body
    const userID = req.user.id
    const follow_q = `insert into followers (vacationID, followerID)
    values (?, ?)`
    try {
        await Query(follow_q, vacationID, userID)
        res.sendStatus(201)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/remove', authenticateToken, async (req, res) => {
    const {vacationID} = req.query
    const userID = req.user.id
    const remove_q = `delete from followers where vacationID = ? and followerID = ?`
    try {
        await Query(remove_q, vacationID, userID)
        res.sendStatus(204)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router