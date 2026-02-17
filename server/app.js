const express = require("express");

//access to environment variables
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// initialize express app
const app = express();

// runs most middleware
require("./config")(app);


// import files
const Game = require('./models/Game.model.js')
const UserGame = require('./models/UserGame.model.js')
const User = require('./models/User.model.js')
const { isAuthenticated } = require('./auth/jwt.js')


// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const gameRoutes = require("./routes/game.routes");
app.use("/api/games", gameRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/api/users", isAuthenticated, userRoutes);

const userGameRoutes = require("./routes/userGame.routes");
app.use("/api/userGames", isAuthenticated, userGameRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
