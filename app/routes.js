var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.redirect('/team/medway');
})

router.get('/om/:id', function (req, res) {
  var omName = req.query.name

  res.render('om/overview', {
    'entitiyLevel': 'Offender manager',
    'entityTitle': omName,
    'breadcrumbs': {
      items: [
        {
          link: '#',
          title: 'South East and Easter'
        },
        {
          link: '#',
          title: 'Kent'
        },
        {
          link: 'team/medway',
          title: 'Medway'
        },
        {
          title: omName
        }
      ]
    }
  })
})

router.get('/team/:name', function (req, res) {
  let teamName = req.params.name
  let subnav = {
    links: [
      {
        link: '/team/'+teamName,
        title: 'Overview',
        active: true
      },
      {
        link: '/team/'+teamName+'/capacity',
        title: 'Capacity'
      },
      {
        link: '/team/'+teamName+'/caseload',
        title: 'Caseload'
      },
      {
        link: '/team/'+teamName+'/reductions',
        title: 'Reductions'
      }
    ]
  }

  res.render('team/overview', {
    'entitiyLevel': 'Team',
    'entityTitle': teamName,
    'subnav': subnav
  })
})

router.get('/team/:name/capacity', function (req, res) {
  let teamName = req.params.name
  let subnav = {
    links: [
      {
        link: '/team/medway',
        title: 'Overview'
      },
      {
        link: '/team/medway/capacity',
        title: 'Capacity',
        active: true
      },
      {
        link: '/team/medway/caseload',
        title: 'Caseload'
      },
      {
        link: '/team/medway/reductions',
        title: 'Reductions'
      }
    ]
  }

  res.render('team/capacity', {
    'entitiyLevel': 'Team',
    'entityTitle': teamName,
    'subnav': subnav
  })
})

router.get('/team/:name/caseload', function (req, res) {
  let teamName = req.params.name
  let subnav = {
    links: [
      {
        link: '/team/medway',
        title: 'Overview'
      },
      {
        link: '/team/medway/capacity',
        title: 'Capacity'
      },
      {
        link: '/team/medway/caseload',
        title: 'Caseload',
        active: true
      },
      {
        link: '/team/medway/reductions',
        title: 'Reductions'
      }
    ]
  }

  res.render('team/caseload', {
    'entitiyLevel': 'Team',
    'entityTitle': teamName,
    'subnav': subnav
  })
})

module.exports = router
