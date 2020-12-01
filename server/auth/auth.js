const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Query = require('../helpers/mysql')

router.post('/login', async (req, res) => {
    const {userName, password} = req.body
    const userLogin_q = `SELECT * FROM users where userName = "${userName}" AND password = "${password}"`
    try {
        const result = await Query(userLogin_q)
        if (!result.length) return res.status(400).json("Username or Password Incorrect")
        const user = result[0]
        delete user.password
        const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET)
        res.json(accessToken)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/register', async (req, res) => {
    const {firstName, lastName, userName, password} = req.body
    const validUserName_q = `SELECT userName FROM users WHERE userName = "${userName}"`
    const addUser_q = `insert into users (firstName, lastName, userName, password)
    values ("${firstName}", "${lastName}", "${userName}", "${password}")`
    try{
        const existUser = await Query(validUserName_q)
        if (existUser.length) return res.status(400).json('Username Already Exist')
        await Query(addUser_q)
        res.json('login now')
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router