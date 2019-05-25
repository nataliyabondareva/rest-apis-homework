const express = require("express");
const app = express();
const port = 3000;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:secret@localhost:5432/postgres",
  { define: { timestamps: false } }
);
const bodyParser = require("body-parser");

const Movie = sequelize.define(
  "movies",
  {
    title: Sequelize.TEXT,
    yearOfRelease: Sequelize.INTEGER,
    synopsis: Sequelize.TEXT
  },
  {
    tableName: "movies"
  }
);

app.use(bodyParser.json());
app.listen(port, () => `Listening on port ${port}`);
app.get("/", (req, res) => res.redirect("/movies"));

// responds to request with all movies in database
app.get("/movies", function(req, res, next) {
  Movie.findAll()
    .then(movies => {
      res.json({ message: "Here are all the movies", movies: movies });
    })
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

// responds with a specified movie
app.get("/movies/:id", function(req, res, next) {
  const id = req.params.id;
  Movie.findByPk(id)
    .then(movies => {
      res.json({ movies });
    })
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

// adds a movie to the database
app.post("/movies", function(req, res) {
  Movie.create(req.body)
    .then(movie => res.status(201).json(movie))
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

// updates an existing movie
app.put("/movies/:id", function(req, res) {
  const title = req.body.title;
  const yearOfRelease = req.body.yearOfRelease;
  const synopsis = req.body.synopsis;
  const id = req.params.id;
  Movie.update(
    { title: title, yearOfRelease: yearOfRelease, synopsis: synopsis },
    { where: { id: id } }
  )
    .then(movie => res.status(201).json(movie))
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

// deletes a single movie
app.delete("movies/:id"),
  function(req, res) {
    const id = req.params.id;
    Movie.destroy({ where: { id: id } })
      .catch(err => {
        res.status(500).json({
          message: "Something went wrong",
          error: err
        });
      });
  };

Movie.sync();
