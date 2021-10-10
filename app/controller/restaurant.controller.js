const db = require("../models");
const Restaurant = db.restaurant;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Restaurant
    const restaurant = new Restaurant({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
  
    // Save Restaurant in the database
    restaurant
      .save(restaurant)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Restaurant."
        });
      });
    };
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Restaurant.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving restaurant."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

  Restaurant.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Restaurant with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Restaurant with id=" + id });
    });
};


exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Restaurant.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Restaurant with id=${id}. Maybe Restaurant was not found!`
            });
          } else res.send({ message: "Restaurant was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Restaurant with id=" + id
          });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Restaurant.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Restaurant with id=${id}. Maybe Restaurant was not found!`
          });
        } else {
          res.send({
            message: "Restaurant was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Restaurant with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    Restaurant.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Restaurant were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Restaurant."
      });
    });
};


exports.findAllPublished = (req, res) => {
    Restaurant.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Restaurant."
      });
    });
};