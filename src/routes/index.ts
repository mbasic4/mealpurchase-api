import express from 'express'
import { mealsController } from './meals/meals.controller'

export const apiController = express.Router()
apiController.use(mealsController)
