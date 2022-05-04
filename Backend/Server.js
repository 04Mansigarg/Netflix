const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = 8000

const BannerMoController = require("./Controllers/BannerMo.Controller")
const BannerTvController = require("./Controllers/BannerTv.Controller")
const moviesController = require("./Controllers/Movies.Controller")
const tvShowsController = require("./Controllers/TvShows.Controller")


const app = express()
app.use(cors())
app.use(express.json())

app.use("/bannermovies", BannerMoController)
app.use("/bannertvshows", BannerTvController)
app.use("/tvshows", tvShowsController)
app.use("/movies", moviesController)

mongoose.connect('mongodb+srv://mansigarg:1234554321@cluster0.0sg5t.mongodb.net/Netflix?retryWrites=true&w=majority')
mongoose.connection.once("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});

app.listen(PORT, () => {
    console.log(`Listenting at ${PORT}`)
})