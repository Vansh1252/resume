import express from 'express'

const router =express.Router()

import { home } from '../controller/home.js'
import { services } from '../controller/services.js'
import { skill } from '../controller/skill.js'
import { contact } from '../controller/contact.js'

router.get('/',home)
router.get('/services',services)
router.get('/skill',skill)
router.get('/contact',contact)

export default router