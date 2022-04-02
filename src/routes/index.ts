import express from 'express'
import { mealCategoriesController } from './mealCategories/mealCategories.controller'
import { mealsController } from './meals/meals.controller'

export const apiController = express.Router()
apiController.use([mealsController, mealCategoriesController])
