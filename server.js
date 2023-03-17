const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Todoit = require('./models/schema.js')
const Todo = require("./models/seed.js")
const port = 3000
const mongoURI = 'mongodb://localhost:27017/todo'
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))

mongoose.connect(mongoURI)

// INDEX PAGE RENDERED
app.get("/todoit", (req, res) => {
  const timestamp = new Date().getTime(); // get current timestamp
  Todoit.find({})
    .then((todos) => {
      res.render("index.ejs", { Todo: todos, timestamp: timestamp }); // pass timestamp to view
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error");
    });
});



// NEW TASK ITEM ROUTE \\ 
app.get("/todoit/new", (req, res) => {
  res.render("new.ejs");
});

// CALENDAR ROUTE \\
app.get("/todoit/calendar", (req, res) => {
  res.render("calendar.ejs");
})

// EDIT ROUTE \\
app.get("/todoit/:id/edit", (req, res) => {
  Todoit.findById(req.params.id).then((todos) => {
    res.render("edit.ejs", {
      Todo: todos
    });
  });
});





// SEARCH ROUTE \\
app.get("/todoit/search", (req, res) => {
  const query = req.query.q; // Get search query from request query parameters

  // Use a regular expression to search for matching Todoit documents
  Todoit.find({ $or: [
    { task: { $regex: query, $options: "i" } },
    { location: { $regex: query, $options: "i" } }
  ]})
  .then((results) => {
    res.render("index.ejs", { Todo: results });
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("error");
  })
  .then(() => {
    res.redirect("/todoit");
  });

});

app.get("/todoit/:id/edit", (req, res) => {
  Todoit.findById(req.params.id).then((todos) => {
    res.render("edit.ejs", {
      Todo: todos
    });
  });
});

app.delete('/todoit/:id/delete/', (req, res) => {
  Todoit.findByIdAndRemove(req.params.id).then((todos) => {
 res.redirect("/todoit/")
  }) 
   
   
});



app.put("/todoit/:id", (req, res) => {
  Todoit.findByIdAndUpdate(
    req.params.id, // find the Todo item to update by ID
    {
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      task: req.body.task,
      completed: req.body.completed === "on" // checkbox value is "on" if checked
    },
    { new: true } // return the updated Todo item in the response
  ).then((updatedTodo) => {
    res.redirect("/todoit"); // redirect to the index page after update
  });
});




//  POST ROUTE WITH REDIRECT TO INDEX
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










app.listen(port, () => {
  console.log("listening");
});




// SEED DATA TO MONGO \\
// Todoit.insertMany(Todo)
//   .then((docs) => {
//     console.log("data seeded, mongo connection established");
//   }).catch((err) => {
//     console.error(err);
//   });

// // first route, host address established \\
// app.get("/todoit/", (req, res) => {
//     res.send('hey')
// })




// app.get('/todoit', (req, res) => {
//     Todo.find().then((todo) => {
//         res.render('index.ejs', { data: todo })
//       })
    
//   })