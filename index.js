const express = require("express");
const fs = require("fs");
const cors = require('cors');
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/web'));

app.get("/", (req, res) =>{
    var data = {
        indexClass : "nav-item active",
        aboutClass : "nav-item"
    };
    res.render(path.join(__dirname,"/web/index.pug"), data);
});

app.get("/about", (req,res) => {
    var data = {
        indexClass : "nav-item",
        aboutClass : "nav-item active"
    };
    res.render(path.join(__dirname,"/web/about.pug"), data);
});

app.listen(process.env.PORT || 2023, () => {
    console.log("Listening on port 2023 B)");
});