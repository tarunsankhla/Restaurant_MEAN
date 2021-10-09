module.exports = mongoose => {
    const Restaurant = mongoose.model(
      "restaurant",
      mongoose.Schema(
        {
          address: {
              building: String,
              coord: [{
                lat : String,
                lng : String
                 }],
              street : String,
              zipcode: String
          },
          borouygh: String,
          cuisine: String,
          grades : [{
            date : String,
            grade : String,
            score: String
          }],
          name: String,
          restaurant_id: String,
        },
        { timestamps: true }
      )
    );
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Tutorial = mongoose.model("restaurant", schema);
  
    return Restaurant;
  };