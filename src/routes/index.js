const router = require('express').Router();
const mysqlConnection = require('../database/database')

router.get('/', (req, res) => {

    let resultados;

    mysqlConnection.query("SELECT * FROM productos", (err, results, row) => {

        /* results=JSON.parse(JSON.stringify(results)) */
        resultados = results
        console.log(resultados)
        console.log(resultados)
        res.render('index', {
            resultados
        })

    })
    
    console.log(resultados)

   /*  resultados = 1 */
})
module.exports = router;