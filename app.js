const express = require("express");
const app = express();
const path = require('path');

const PORT = 3000;

// configuration
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const objek = {
        people: ["Alvian", "Rahmat", "Julian"]
    };

    res.render('index', { person: objek });
});

app.get("/data", (req, res) => {
    res.send({
        height: 180,
        name: "Alvian",
        status :"jomblo"
    });
})

app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT + "/");
});



// app.get('/home', (req, res) => {
//     res.send("Home Page");
// });

// app.get('/home/:id', (req, res) => {
//     const { id } = req.params;
//     res.send("Home Page " + id);
// })