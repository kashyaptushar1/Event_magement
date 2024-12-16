const mongoose = require('mongoose')
const userModel = require('./models/user');
const eventModel = require('./models/event');
const connection = require('./config/db');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.set("view engine", 'ejs');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        await userModel.create({
            username: username,
            email: email,
            password: password
        });
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering the user. Please try again.");
    }
});

app.get("/home", (req, res) => {
    res.render('index');
});

app.get("/book", (req, res) => {
    res.render('booking');
});

app.post('/book-event', async (req, res) => {
    const { name, phoneno, eventtype, message } = req.body;

    try {
        await eventModel.create({
            name: name,
            phoneno: phoneno,
            eventtype: eventtype,
            message: message
        });
        res.redirect('/home');
    } catch (error) {
    
        console.error(error);
        res.status(500).send("Error booking the event. Please try again.");
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
