import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()
// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
// POST localhost:3000/skills
router.get('/:skillId', skillsCtrl.show)
// GET localhost:3000/skills/:skillId/edit
router.get('/:skillId/edit', skillsCtrl.edit)
router.post('/', skillsCtrl.create)
router.delete('/:skillId', skillsCtrl.delete)
// PUT localhost:3000/skills/:skillId
router.put('/:skillId', skillsCtrl.update)

export {router}