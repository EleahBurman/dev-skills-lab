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

function newSkills(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Todo.create(req.body)
  .then(todo => {
		// Notice we are doing a redirect here!
    res.redirect('/todos')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

function show(req, res) {
  Todo.findById(req.params.todoId)
  .then(todo => {
    res.render('todos/show', {
      todo: todo
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

export {
  index,
  newSkills as new,
  create,
  show
}