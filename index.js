var express = require("express");
var app = express();


app.get("/", (req,res) => {
    res.json(["chase", "jordan", "newman"]); 
});

app.listen(8080, () => {
   console.log("Server Running On Port 8080") 
});