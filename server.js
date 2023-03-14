// server.js
const express = require('express')
const mongoose = require('mongoose')
const Todoit = require('./models/schema.js')
const Todo = require("./models/seed.js")
const port = 3000
const mongoURI = 'mongodb://localhost:27017/todo'
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Connect to the MongoDB database
mongoose.connect(mongoURI)
 

// INDEX PAGE RENDERED
app.get("/todoit", (req, res) => {
  Todoit.find({})
    .then((todos) => {
      res.render("index.ejs", { Todo: todos });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error");
    });
});

// CREATE TASK ITEM PAGE ROUTE 
app.get("/todoit/new", (req, res) => {
  res.render("new.ejs");
});

// CREATE ROUTE WITH REDIRECT TO INDEX
app.post("/todoit", (req, res) => {
  Todoit.create(req.body)
    .then(() => {
      res.redirect("/todoit");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error");
    });
});

// SEED DATA TO MONGO \\
Todoit.insertMany(Todo)
  .then((docs) => {
    console.log("data seeded");
  }).catch((err) => {
    console.error(err);
  });


app.listen(port, () => {
  console.log("listening");
});






// Seed Data to mongoDB \\
// app.get('/todoit/seed', (req, res) => {
//     Todoschema.create(Todo).then((data) => {
//         res.render('/todoit')
//     })
// }) 

// // first route, host address established \\
// app.get("/todoit/", (req, res) => {
//     res.send('hey')
// })




// app.get('/todoit', (req, res) => {
//     Todo.find().then((todo) => {
//         res.render('index.ejs', { data: todo })
//       })
    
//   })