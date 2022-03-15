'use strict'
const RestaurantController = require('../controllers/RestaurantController')
const ProductController = require('../controllers/ProductController')

const OrderController = require('../controllers/OrderController')
const ProductRoutes = require('./ProductRoutes')

module.exports = (options) => {
  const app = options.app
  app.route('/restaurants/owner')
    .post(
      RestaurantController.create
    )
    .get(
      RestaurantController.index
    )
    .put(
      RestaurantController.update
    )
    .delete(
      RestaurantController.destroy
    )
  app.route('/restaurants')
    .get(
      RestaurantController.index
    )
  app.route('/restaurants/:restaurantId')
    .get(
      RestaurantController.show
    )
  app.route('/restaurants/:restaurantId/orders')
    .get(
      OrderController.indexRestaurant
    )
  
  app.route('/restaurants/orders')
    .get(
      OrderController.analytics
    )
  
}
  



  


  // TODO: Include routes for restaurant described in the lab session wiki page.

