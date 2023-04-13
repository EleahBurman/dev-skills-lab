import { Skill } from '../models/skill.js'

// Inside the index controller, use the Todo model to query for ALL todos
function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
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
  //req.body.ability = false
  Skill.create(req.body)
  .then(skill => {
		// Notice we are doing a redirect here!
    console.log(skill)
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills/new')
  })
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkills as new,
  create,
  show,
  deleteSkill as delete
}