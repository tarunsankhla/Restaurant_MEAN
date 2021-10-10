const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');

const app = express();

var corsOptions = {
origin: "http://localhost:8081"
};
require("./app/routes/resturant.route")(app);
app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }))

// app.use(express.bodyParser());

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