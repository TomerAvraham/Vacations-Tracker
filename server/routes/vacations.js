const router = require('express').Router()
const Query = require('../helpers/mysql')
const {authenticateToken, authenticateAdmin} = require('../auth/verification')

router.get('/all', authenticateToken, async (req, res) => {
    const vacation_q = `select vacations.id, vacations.description, vacations.destination,
    photoUrl, price, fromDate, toDate, 
    count(followerID) as followers
     from vacations LEFT join followers on vacations.id = followers.vacationID
     group by vacations.id`
    try {
        const vacations = await Query(vacation_q)
        res.status(200).json(vacations)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/add', authenticateToken, authenticateAdmin, async (req, res) => {
    const { description, destination, photoUrl, price, fromDate, toDate } = req.body
    const addingVacation_q = `insert into vacations (description, destination, photoUrl, price, fromDate, toDate)
    values (?, ?, ?, ?, ?, ?)`
    try{
        await Query(addingVacation_q,  description, destination, photoUrl, price, fromDate, toDate)
        res.sendStatus(201)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/edit/:id', authenticateToken, authenticateAdmin, async (req, res) => {
    const { description, destination, photoUrl, price, fromDate, toDate } = req.body
    const { id } = req.params
    const editVacation_q = `update vacations set description = ?, destination = ?, photoUrl = ?, fromDate = ?, 
    toDate = ? where vacations.id = ${id}`
    try {
        await Query(editVacation_q, description, destination, photoUrl, price, fromDate, toDate)
        res.sendStatus(204)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/delete/:id', authenticateToken, authenticateAdmin, async (req, res) => {
    const { id } = req.params
    const delete_q = `delete from vacations where id = ${id}`
    try {
        await Query(delete_q)
        res.sendStatus(204)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router