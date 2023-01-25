const express = require('express');
const app = express();
const mongoose = require('mongoose');
const GameModel = require('./models/GameModel');
const UserModel = require('./models/UserModel');

const URI = "mongodb+srv://admin:123zxc34@cluster0.hoxv5bc.mongodb.net/?retryWrites=true&w=majority";

async function run() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        mongoose.set('strictQuery', true);
        app.listen(3001, () => {
            console.log(`Server is working now on port ${3001}`);
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

run();

app.get("/getgames", async (req, res) => {
    const cursor = await GameModel.find({}).lean();
    res.json({ cursor: cursor })
})

app.get('/addgame', async (req, res) => {
    let Name = "Grand Theft Auto: Vice City";
    let Desc = "Simple text example";
    let Price = "8.99";
    let Img = "https://wallpapercave.com/wp/wp1899005.jpg";

    const game = new GameModel({
        Name: Name,
        Desc: Desc,
        Price: Price,
        Img: Img
    })
    await game.save();
})

app.get("/adduser", async (req, res) => {
    console.log("user added")

    let Login = "Grand Theft Auto: Vice City";
    let Password = "Simple text example";
    let Root = "true";

    const user = new UserModel({
        Login: Login,
        Password: Password,
        Root: Root
    })
    await user.save();
})

app.get("/login", async (req, res) => {
    const cursor = await GameModel.find({}).lean();
    if (cursor == true) {
        alert("Welcome " + cursor.Login)
    }
})