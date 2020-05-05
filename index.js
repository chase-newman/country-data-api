var express = require("express");
var app = express();
var PORT = process.env.PORT || 5000;


app.get("/", (req,res) => {
    res.json(["chase", "jordan", "newman"]); 
});

app.listen(PORT, () => {
   console.log("Server Running On Port 8080") 
});