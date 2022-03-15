'use strict'
const models = require('../models')
const Restaurant = models.Restaurant
const Product = models.Product
const newRestaurant = Restaurant.build(req.body)

exports.index = async function (req, res) {
  try {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.indexOwner = function (req, res) {
  try {
    const restaurants = await Restaurant.findAll({
      where: {
        ownerId: req.params.restaurantId
      }
    })
    res.json(restaurants)
  } catch (err) {
    res.sendStatus(404).send(err)
  }
  
}

exports.create = async function (req, res) {
  if (typeof req.files?.heroImage !== 'undefined') {
    newRestaurant.heroImage = req.files.heroImage[0].path
  }
  if (typeof req.files?.logo !== 'undefined') {
    newRestaurant.logo = req.files.logo[0].path
  try {
      const restaurant = await newRestaurant.save()
      res.json(restaurant)
    }
  catch (err) {
    if (err.name.includes('ValidationError')) { //The database may return some kind of error.
        res.status(422).send(err)
    } else {
        res.status(500).send(err)
    }
}
  }
}

exports.show = async function (req, res) {
  try {
    const restaurant = await Restaurant.findByPk(req.params.restaurantId,
      {
        include: [
          {
            model: Product,
            as: 'products'
          }
       ]
      })
    res.json(restaurant)
  } catch (err) {
    res.status(500).send(err)
  }
}

// Implement below, the update and destroy functions as well
