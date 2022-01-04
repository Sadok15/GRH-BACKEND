const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")


const port = 3000



// Connect to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/grh", { useNewUrlParser: true })
    .then(() =>{

        const app = express()
        app.use(express.json())
        app.use("/api", routes)
        
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })

    })


mongoose.connection.on("error", err =>{
    console.log("err", err)
})


mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })







