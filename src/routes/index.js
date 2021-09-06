const router = require('express').Router();
const mysqlConnection = require('../database/database')

router.get('/', (req, res) => {
    mysqlConnection.query("SELECT * FROM productos", (err, resuls, row) => {
        console.log(resuls)
        console.log(row)
        console.error(err)
    })
})
module.exports = router;