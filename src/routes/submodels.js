const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.send("Ok")
})

router.get('/', (req, res) => {
    res.send({
        hi:"Hola"
    })
})


module.exports = router;