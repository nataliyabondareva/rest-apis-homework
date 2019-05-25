// const express = require("express");
// const app = express();
// const port = 3000;
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   "postgres://postgres:secret@localhost:5432/postgres",
//   { define: { timestamps: false } }
// );
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.listen(port, () => `Listening on port ${port}`);
// app.get("/", (req, res) => res.redirect("/movies"));

// const Movie = sequelize.define(
//   "movie",
//   {
//     title: Sequelize.TEXT,
//     yearOfRelease: Sequelize.INTEGER,
//     synopsis: Sequelize.TEXT
//   },
//   {
//     tableName: "movies"
//   }
// );

// // responds to request with all movies in database
// app.get("/movies", function(req, res, next) {
//   Movie.findAll()
//     .then(movies => {
//       res.json({ message: "Here are all the movies", movies: movies });
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: "Something went wrong",
//         error: err
//       });
//     });
// });

// // responds to request with a specified movie
// app.get("/movies/:id", function(req, res, next) {
//   const id = req.params.id;
//   Movies
//     .then(movie => {
//       res.json({ movie: `Movie: ${id}`})
//     })
//   .catch(err => {
//     res.status(500).json({
//       message: "Something went wrong",
//       error: err
//     });
//   });
// });

// // will add a movie to the database
// app.post("/movies", function(req, res) {
//   Movie
//     .create(req.body).then(movie => res.status(201).json(movie));
// });

// // will update an existing movie
// app.put("/movies/:id", function(req, res) {
//   const id = req.params.id;
//   Movie.update(req.body).then(movie => res.status(201).json(movie));
// });

// //deletes a single movie
// app.delete("/movies/:id", function(req, res) {
//   const id = req.params.id;
//   Movie.then(movies.filter(movie => movies.id !== id)).then(
//     res.json({ message: `Deleted movie ${id}` })
//   );
// });

// Movie.sync();
