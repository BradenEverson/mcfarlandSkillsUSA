const express = require("express");
const fs = require("fs");
const cors = require('cors');
const path = require("path");
const { Console } = require("console");
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

app.get("/prizeWheel", (req, res) => {
    res.render(path.join(__dirname, "/web/prizeWheel.pug"));
});

app.get("/prizeWheelDataPost?:name", (req, res) => {
   fs.readFile("Data/Students.json", (err, data) => {
        if(err){
            console.log(err);
            throw err;
        } 
        let newStudent = {
            "Name" : req.query.name
        };
        let jsonData = JSON.parse(data);
        jsonData.Items.push(newStudent);
        fs.writeFileSync("Data/Students.json", JSON.stringify(jsonData));
        res.json({"Success": 200});
   }); 
});

app.get("/apiSpill", (req, res) => {
    fs.readFile("Data/Students.json", (err, data) => {
        if(err){
         throw err;
        }    
        res.json(JSON.parse(data));
    });
});

app.listen(process.env.PORT || 2023, () => {
    console.log("Listening on port 2023 B)");
});