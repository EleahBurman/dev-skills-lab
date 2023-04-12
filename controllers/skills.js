import { Skill } from '../models/skill.js'

// Inside the index controller, use the Todo model to query for ALL todos
function index(req, res) {
  Todo.find({})
  .then(todos => { // todos represents the result of the query, in this case ALL todos
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}