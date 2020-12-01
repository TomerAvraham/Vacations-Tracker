const router = require('express').Router()
const Query = require('../helpers/mysql')

router.get('/all', async (req, res) => {
    const q = 'SELECT * FROM vacations'
    try {
        const vacations = await Query(q)
        res.status(200).json(vacations)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router