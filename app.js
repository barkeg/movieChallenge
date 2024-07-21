// Import necessary modules

// Initialize express server

// Inject environment variables

// Define the `PORT` and `PROGRAM_NAME` variables

// Callback functions
const getAllMovies = (req, res, next) => {
    res.send(movies);
  }
  
  const getOneMovie = (req, res, next) => {
    const foundMovie = movies.filter(movie => movie.id == req.params.id);
  
    if(foundMovie){
      res.send(foundMovie)
    } else {
      res.status(404).send();
    }
  }
  
  const createMovie = (req, res, next) => {
    if(req.params.title) {
      movies.push({
        title: req.params.title, 
        release_year: req.params.release_year
      })
      res.send(movies[movies.length - 1]);
    } else {
      res.status(400).send();
    }
  }
  
  const updateMovieTitle = (req, res, next) => {
    const movieIndex = movies.findIndex(req.params.id) 
    if(movieIndex !== -1) {
      movies[movieIndex].title = req.params.title
      res.send(movies[movieIndex]);
    } else {
      res.status(404).send();
    }
  }
  
  const deleteMovie = (req, res, next) => {
    const movieIndex = movies.findIndex(req.params.id) 
    if(movieIndex !== -1) {
      movies.splice(movieIndex, 1);
      res.status(200).send(movies);
    } else {
      res.status(404).send();
    }
  }
  
  // Define API endpoints
  
  
  app.listen(3000, function () {
    console.log(`${PROGRAM_NAME} listening on port ${PORT}!`);
  });
  
  // Leave this in for testing purposes
  module.exports = { app };