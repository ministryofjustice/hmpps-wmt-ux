var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/beta/:version/your-profile', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var isAdmin = req.query.isAdmin
  var version = req.params.version

  res.render('beta/'+version+'/your-profile/index', {
    'isAdmin': isAdmin,
    'isProfilePage': true
  })

})

module.exports = router
