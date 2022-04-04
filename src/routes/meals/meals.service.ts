import mealsData from '../../mealsData.json'

interface Meal {
  id: string
  title: string
  starter: string
  desert: string
  price: number
  labels: Array<string>
  img: string
  drinks: Array<Drink>
}

interface Drink {
  id: string
  title: string
  price: number
}

function getList (query) {
  const limit = parseInt(query.limit)
  const page = parseInt(query.page)
  const offset = (page - 1) * limit

  let data = { data: mealsData.meals } as { data: Array<Meal>, totalCount: number }

  if (query.mealIds) {
    const meals = data.data.filter(meal => query.mealIds.includes(meal.id))
    return { data: meals, totalCount: meals.length }
  }

  if (query.mealCategoryId) {
    const filteredData = data.data.filter(meal => meal.labels.includes(query.mealCategoryId))
    data = { data: filteredData, totalCount: filteredData.length }
    return data
  }

  if (limit) {
    const mealsDataCopy = [ ...mealsData.meals ]
    data = { data: mealsDataCopy.splice(offset, limit), totalCount: mealsData.meals.length }
    return data
  }

  return { data: mealsData.meals, totalCount: mealsData.meals.length }
}

export default {
  getList
}
