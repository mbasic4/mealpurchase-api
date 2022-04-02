import express from 'express'
import mealsService from './meals.service'

export const mealsController = express.Router()

mealsController.get('/v1/meals', async function (req, res) {
  const mealsData = mealsService.getList()
  res.send(mealsData)
})
