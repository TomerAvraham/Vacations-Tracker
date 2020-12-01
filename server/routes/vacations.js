const router = require('express').Router()
const Query = require('../helpers/mysql')
const authenticateToken = require('../auth/verification')

router.get('/all', authenticateToken,  async (req, res) => {
    console.log(req.user)
    const q = 'SELECT * FROM vacations'
    try {
        const vacations = await Query(q)
        res.status(200).json(vacations)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router