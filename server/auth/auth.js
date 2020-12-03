const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Query = require('../helpers/mysql')
const bcrypt = require('bcrypt');


router.post('/login', async (req, res) => {
    const {userName, password} = req.body
    const userName_q = `SELECT * FROM users where userName = ?`
    try {
        const result = await Query(userName_q, userName)
        if (!result.length) return res.status(400).json("Username  Incorrect")
        const user = result[0]
        if (await bcrypt.compare(password, user.password)) {
            delete user.password
            const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET)
            res.json(accessToken)
        } else {
            res.status(400).json('Password Incorrect')  
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/register', async (req, res) => {
    const {firstName, lastName, userName, password} = req.body
    const validUserName_q = `SELECT userName FROM users WHERE userName = "${userName}"`
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const addUser_q = `insert into users (firstName, lastName, userName, password)
        values (?, ?, ?, ?)`
        const existUser = await Query(validUserName_q)
        if (existUser.length) return res.status(400).json('Username Already Exist')
        await Query(addUser_q, firstName, lastName, userName, hashedPassword)
        res.json('login now')
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router