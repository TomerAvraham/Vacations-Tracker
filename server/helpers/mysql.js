const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project3'
})

connection.connect(err => {
    if (err) throw err
    console.log('MySQL connected')
})

const Query = (query) => {
    return new Promise ((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = Query