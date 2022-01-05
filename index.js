const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

var cors = require('cors')
const port = 3000



// Connect to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/grh", { useNewUrlParser: true })
    .then(() =>{

        const app = express()
        app.use(json())
        app.use("/api", routes)
        app.use(cors({
            origin: '*',
            methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
            // preflightContinue: false,
            optionsSuccessStatus: 200
        }))

        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })

    })


connection.on("error", err =>{
    console.log("err", err)
})


connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })







