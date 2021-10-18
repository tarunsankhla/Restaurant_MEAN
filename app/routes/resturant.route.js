module.exports = app => {
    const restaurant = require("../controller/restaurant.controller.js");
    let express = require('express');
    // let router = express.Router();

  
    var router = require("express").Router();
    var bodyParser = require('body-parser');
    // Create a new restaurant
    // router.post("/", bodyParser.urlencoded({ extended: false })
    // , restaurant.create);
    // router.post("/", restaurant.create);

    
router.post("/", express.urlencoded({ extended: true }), function (request, response) {
  let keys = Object.keys(request.body);
  console.log("from route"+ request.body.customKey);
  console.log(keys);
  console.log("mail"+request.body.Email+request.body.name);
  if (!request.body.name) {
    response.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  response.status(200);
});
  
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


