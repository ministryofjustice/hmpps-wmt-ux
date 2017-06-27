const express = require('express')
const router = express.Router()
const moment = require('moment')


const lduBreadcrumbs = (lduName) => {
  return {
    items: [
      {
        link: '#',
        title: 'South East and Eastern'
      },
      {
        link: '/ldu/'+lduName,
        title: lduName
      }
    ]
  }
}

const teamBreadcrumbs = (teamName) => {
  return {
    items: [
      {
        link: '#',
        title: 'South East and Eastern'
      },
      {
        link: '/ldu/kent',
        title: 'Kent'
      },
      {
        link: '/team/'+teamName,
        title: teamName
      }
    ]
  }
}

const omBreadcrumbs = (omName) => {
  return {
    items: [
      {
        link: '#',
        title: 'South East and Eastern'
      },
      {
        link: '/ldu/kent',
        title: 'Kent'
      },
      {
        link: '/team/medway',
        title: 'Medway'
      },
      {
        title: omName
      }
    ]
  }
}



// Route index page
router.get('/', function (req, res) {
  res.redirect('/team/medway');
})

router.get('/om/:id', function (req, res) {
  let omName = 'Clare Hastings'
  let omID = req.params.id
  let subnav = {
    links: [
      {
        link: '/om/'+omID+'?name='+omName,
        title: 'Overview',
        active: true
      },
      {
        link: '/om/'+omID+'/capacity?name='+omName,
        title: 'Capacity'
      },
      {
        link: '#',
        title: 'Caseload'
      },
      {
        link: '/om/'+omID+'/reductions?name='+omName,
         title: 'Reductions'
      }
    ]
  }

  req.session.omName = omName

  res.render('om/overview', {
    'entitiyLevel': 'Offender manager',
    'entityTitle': omName,
    'subnav': subnav,
    'breadcrumbs': omBreadcrumbs(omName)
  })
})

router.get('/om/:id/capacity', function (req, res) {
  let omName = 'Clare Hastings'
  let omID = req.params.id
  let subnav = {
    links: [
      {
        link: '/om/'+omID+'?name='+omName,
        title: 'Overview'
      },
      {
        link: '/om/'+omID+'/capacity?name='+omName,
        title: 'Capacity',
        active: true
      },
      {
        link: '#',
        title: 'Caseload'
      },
      {
        link: '/om/'+omID+'/reductions?name='+omName,
        title: 'Reductions'
      }
    ]
  }

  res.render('om/capacity', {
    'entitiyLevel': 'Offender manager',
    'entityTitle': omName,
    'omID': omID,
    'subnav': subnav,
    'breadcrumbs': omBreadcrumbs(omName)
  })
})

router.get('/om/:id/reductions', function (req, res) {
  let omName = 'Clare Hastings'
  let omID = req.params.id
  let subnav = {
    links: [
      {
        link: '/om/'+omID+'?name='+omName,
        title: 'Overview'
      },
      {
        link: '/om/'+omID+'/capacity?name='+omName,
        title: 'Capacity'
      },
      {
        link: '#',
        title: 'Caseload'
      },
      {
        link: '/om/'+omID+'/reductions?name='+omName,
        title: 'Reductions',
        active: true
      }
    ]
  }
  let newReduction = false

  if (req.session.newReduction) {
    newReduction = req.session.newReduction
    req.session.destroy()
  }

  res.render('om/reductions', {
    'entitiyLevel': 'Offender manager',
    'entityTitle': omName,
    'omID': omID,
    'subnav': subnav,
    'breadcrumbs': omBreadcrumbs(omName),
    'newReduction': newReduction
  })
})

router.get('/om/:id/reductions/add', function (req, res) {
  let omName = 'Clare Hastings'
  let omID = req.params.id


  res.render('om/reductions-add', {
    'entityTitle': 'New reduction',
    'omName': omName,
    'omID': omID
  })
})

router.post('/om/:id/reductions/add', function (req, res) {
  let omID = req.params.id
  let newReduction = {
    reason: req.body.reason,
    hours: req.body.hours,
    notes: req.body.notes
  }

  newReduction.startDate = moment(new Date(req.body.red_start_year, req.body.red_start_month-1, req.body.red_start_day)).format('D MMM YY')
  newReduction.endDate = moment(new Date(req.body.red_end_year, req.body.red_end_month-1, req.body.red_end_day)).format('D MMM YY')

  req.session.newReduction = newReduction

  res.redirect('/om/'+omID+'/reductions')
})

// ----------

router.get('/om/:id/reductions/:red_id', function (req, res) {
  let omName = 'Clare Hastings'
  let omID = req.params.id


  res.render('om/reductions-add', {
    'entityTitle': 'New reduction',
    'omName': omName,
    'omID': omID,
    'isView': true
  })
})

// ----------

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
        link: '#',
        title: 'Reductions'
      }
    ]
  }

  res.render('team/overview', {
    'entitiyLevel': 'Team',
    'entityTitle': teamName,
    'subnav': subnav,
    'breadcrumbs': teamBreadcrumbs(teamName)
  })
})

router.get('/team/:name/capacity', function (req, res) {
  let teamName = req.params.name
  let subnav = {
    links: [
      {
        link: '/team/'+teamName,
        title: 'Overview'
      },
      {
        link: '/team/'+teamName+'/capacity',
        title: 'Capacity',
        active: true
      },
      {
        link: '/team/'+teamName+'/caseload',
        title: 'Caseload'
      },
      {
        link: '#',
        title: 'Reductions'
      }
    ]
  }

  res.render('team/capacity', {
    'entitiyLevel': 'Team',
    'entityTitle': teamName,
    'subnav': subnav,
    'breadcrumbs': teamBreadcrumbs(teamName)
  })
})

router.get('/team/:name/caseload', function (req, res) {
  let teamName = req.params.name
  let subnav = {
    links: [
      {
        link: '/team/'+teamName,
        title: 'Overview'
      },
      {
        link: '/team/'+teamName+'/capacity',
        title: 'Capacity'
      },
      {
        link: '/team/'+teamName+'/caseload',
        title: 'Caseload',
        active: true
      },
      {
        link: '#',
        title: 'Reductions'
      }
    ]
  }

  res.render('team/caseload', {
    'entitiyLevel': 'Team',
    'entityTitle': teamName,
    'subnav': subnav,
    'breadcrumbs': teamBreadcrumbs(teamName)
  })
})

router.get('/ldu/:name', function (req, res) {
  let lduName = req.params.name
  let subnav = {
    links: [
      {
        link: '/ldu/'+lduName,
        title: 'Overview',
        active: true
      },
      {
        link: '/ldu/'+lduName+'/capacity',
        title: 'Capacity'
      },
      {
        link: '/ldu/'+lduName+'/caseload',
        title: 'Caseload'
      }
    ]
  }

  res.render('ldu/overview', {
    'entitiyLevel': 'LDU',
    'entityTitle': lduName,
    'subnav': subnav,
    'breadcrumbs': lduBreadcrumbs(lduName)
  })
})

router.get('/ldu/:name/capacity', function (req, res) {
  let lduName = req.params.name
  let subnav = {
    links: [
      {
        link: '/ldu/'+lduName,
        title: 'Overview'
      },
      {
        link: '/ldu/'+lduName+'/capacity',
        title: 'Capacity',
        active: true
      },
      {
        link: '/ldu/'+lduName+'/caseload',
        title: 'Caseload'
      }
    ]
  }

  res.render('ldu/capacity', {
    'entitiyLevel': 'LDU',
    'entityTitle': lduName,
    'subnav': subnav,
    'breadcrumbs': lduBreadcrumbs(lduName)
  })
})

router.get('/ldu/:name/caseload', function (req, res) {
  let lduName = req.params.name
  let subnav = {
    links: [
      {
        link: '/ldu/'+lduName,
        title: 'Overview'
      },
      {
        link: '/ldu/'+lduName+'/capacity',
        title: 'Capacity'
      },
      {
        link: '/ldu/'+lduName+'/caseload',
        title: 'Caseload',
        active: true
      }
    ]
  }

  res.render('ldu/caseload', {
    'entitiyLevel': 'LDU',
    'entityTitle': lduName,
    'subnav': subnav,
    'breadcrumbs': lduBreadcrumbs(lduName)
  })
})

router.get('/search', (req, res) => {
  let searchCriteria = req.query.q
  let results

  if (searchCriteria) {
    switch (searchCriteria.toLowerCase()) {
      case 'medway':
        results = [
          {
            title: 'Medway',
            entity: 'Team',
            parent: 'Kent LDU',
            link: '/team/medway'
          }
        ]
        break;
      case 'kent':
        results = [
          {
            title: 'Kent',
            entity: 'LDU',
            parent: 'South East and Eastern Region',
            link: '/region/south-east-and-eastern'
          }
        ]
        break;
      case 'jane brown':
        results = [
          {
            title: 'Jane Brown',
            entity: 'Offender manager',
            parent: 'Medway team',
            link: '/om/45?name=Jane%20Brown'
          }
        ]
        break;
      default:
        results = null
    }
  }

  res.render('search/search', {
    'isSearchPage': true,
    'entityTitle': 'Search',
    'searchCriteria': searchCriteria,
    'searchResults': results
  })
})


router.get('/date-change', function (req, res) {
  let omName = 'Clare Hastings'
  let omID = req.query.omID


  res.render('change-date', {
    'entitiyLevel': 'Change date range',
    'entityTitle': 'OM average capacity',
    'omName': omName,
    'omID': omID
  })
})


module.exports = router
