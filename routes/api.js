var express = require("express")
var router = express.Router()

router.get('/api', function(req, res) {
    res.send("API is running");
})

router.get('/:param', function(req, res, next) {
    var params = req.params
    var query = req.query
    Object.assign(params, query);
    res.json(params)
})

module.exports = router          