var express = require("express");
const cors = require("cors");
let bodyParser = require('body-parser');

const app = express();
var jsonParser = bodyParser.json()

var corsOptions = {
origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
// app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));
// express.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({ extended: false }))
// app.configure(function(){
//     app.use(express.bodyParser());
//   });
// app.use(express.bodyParser());
require("./app/routes/resturant.route")(app);
app.get("/", (req, res) => {
res.json({ message: "The restaurant app" });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database!");
})
.catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});


// //// axios try
// const axios = require('axios')

// axios
//   .post('http://localhost:8081/api/restaurants/', {
//     todo: 'Buy the milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })
