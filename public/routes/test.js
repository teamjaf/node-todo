const express = require('express')
const router = express.Router()


router.route('/').get((req, res) => {
    res.send("This route is from get")
})

module.exports = router