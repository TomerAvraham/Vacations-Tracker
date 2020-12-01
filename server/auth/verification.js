const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
     const token = req.headers['authorization']
     if (token == null) return res.status(401).json('You Need To Login Again')
     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
         if (err) return res.sendStatus(403)
         req.user = user.user
         next()
     })
}

module.exports = authenticateToken