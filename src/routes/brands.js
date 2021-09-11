const router = require('express').Router()
const mysqlConnection = require('../database/database')

router.get('/', (req, res) => {
    mysqlConnection.query("SELECT * FROM marca", (err, results, rows) => {
        console.log(results)
        res.send({
            ok:"true"
        })
    })
})


module.exports = router;