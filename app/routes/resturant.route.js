module.exports = app => {
    const restaurant = require("../controller/restaurant.controller.js");
  
    var router = require("express").Router();
  
    // Create a new restaurant
    router.post("/", restaurant.create);
  
    // Retrieve all restaurant
    router.get("/", restaurant.findAll);
  
    // Retrieve all published restaurant
    router.get("/published", restaurant.findAllPublished);
  
    // Retrieve a single restaurant with id
    router.get("/:id", restaurants.findOne);
  
    // Update a restaurant with id
    router.put("/:id", restaurants.update);
  
    // Delete a restaurant with id
    router.delete("/:id", restaurants.delete);
  
    // Create a new restaurant
    router.delete("/", restaurants.deleteAll);
  
    app.use('/api/restaurants', router);
  };