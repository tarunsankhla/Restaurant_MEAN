module.exports = app => {
    const restaurant = require("../controller/restaurant.controller.js");
  
    var router = require("express").Router();
    var bodyParser = require('body-parser');
    // Create a new restaurant
    router.post("/", bodyParser.urlencoded({ extended: false })
    , restaurant.create);
  
    // Retrieve all restaurant
    router.get("/", restaurant.findAll);
  
    // Retrieve all published restaurant
    router.get("/published", restaurant.findAllPublished);
  
    // Retrieve a single restaurant with id
    router.get("/:id", restaurant.findOne);
  
    // Update a restaurant with id
    router.put("/:id", restaurant.update);
  
    // Delete a restaurant with id
    router.delete("/:id", restaurant.delete);
  
    // Create a new restaurant
    router.delete("/", restaurant.deleteAll);
  
    app.use('/api/restaurants', router);
  };