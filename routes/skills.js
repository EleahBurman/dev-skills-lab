import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()
// GET localhost:3000/todos
router.get('/', skillsCtrl.index)
// GET localhost:3000/todos/new
router.get('/new', skillsCtrl.new)
// POST localhost:3000/todos
router.get('/:skillId', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:skillId', skillsCtrl.delete)

export {router}