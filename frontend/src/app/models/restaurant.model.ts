export class Restaurant {
    address?: {
        building: String,
        coord: [{
          lat : String,
          lng : String
           }],
        street : String,
        zipcode: String
    };
    borouygh?: String;
    cuisine?: String;
    grades? : [{
      date : String,
      grade : String,
      score: String
    }];
    name?: String;
    restaurant_id?: String;
}
