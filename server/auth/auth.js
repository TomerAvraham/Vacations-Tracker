const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Query = require('../helpers/mysql')

router.post('/login', async (req, res) => {
    const {userName, password} = req.body
    const users_q = `SELECT * FROM users where`
    try {
        
    }
})

module.exports = router