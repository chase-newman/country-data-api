var express = require("express");
var PORT = process.env.PORT || 5000;
var cors = require("cors");
var app = express();


app.use(cors());

app.get("/", (req,res) => {
    res.json({
        country: "United States",
        currency: "USD",
        population: 3000000
    }); 
});

app.listen(PORT, () => {
   console.log("Server Running On Port 8080") 
});