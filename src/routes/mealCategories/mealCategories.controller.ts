import express from 'express'
import mealCategoriesService from './mealCategories.service'

export const mealCategoriesController = express.Router()

mealCategoriesController.get('/v1/meal-categories', async function (req, res) {
  const mealCategoriesData = mealCategoriesService.getList()
  res.send(mealCategoriesData)
})
