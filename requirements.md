0 / 5 Tests passed
To successfully complete the exam, you must pass all the tests in the code challenge. You may choose to end the exam early; however a 24-hour wait period is required before you can attempt it again.
Test Cases

--The app.js file imports the express, dotenv, and movies module dependencies using the variable names express, dotenv, and movies respectively.

Expected `app.js` to require the `express` module and set it as the value of the `express` variable.


--An Express server is initialized in app.js inside a variable called, app.

Expected `app.js` to intialize an Express server in it's `app` variable.


--Environment variables from the .env file have been injected into app.js.

Expected the environment variables to be injected into `app.js`.


--The PORT and PROGRAM_NAME variables have been defined in app.js.

Expected the `PORT` variable to be defined in `app.js`.


--API routes are defined on the /movies path using the predefined callback functions (getAllMovies(), getOneMovie(), createMovie(), updateMovieTitle(), deleteMovie()) for the following requests:

-Get all movies
-Get one movie by its id
-Create a new movie
-Find a movie by its id and update its title
-Find a movie by its id and delete it

Expected `app.js` to contain an endpoint that gets all movies.