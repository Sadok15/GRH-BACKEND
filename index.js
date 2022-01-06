const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require('cors');
const { json } = require("express");


const port = 3000

// Connect to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/grh1", { useNewUrlParser: true })
    .then(() =>{

        const app = express()
        app.use(json())
        app.use(cors());
        app.use(cors({ origin: "*" }));
        app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', "*");
        
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);
        
            // Pass to next layer of middleware
            next();
        });
        // app.use(JSON())
        app.use("/api", routes)

        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })

    })


mongoose.connection.on("error", err =>{
console.log("++++++++++++++++++++++++++", err)
})


mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })
