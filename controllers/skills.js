import { Skill } from '../models/skill.js'

// Inside the index controller, use the Todo model to query for ALL todos
function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}