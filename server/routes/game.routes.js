const router = require('express').Router();
const Game = require('../models/Game.model');


//POST - create a new game
router.post('/', (req, res, next) => {
    Game.create(req.body)
    .then( newGame => res.status(201).json(newGame))
    .catch( err => next(err))
});


//GET - display all games
router.get('/', (req, res, next) => {
    Game.find(req.query)
    .then(allGames => res.status(200).json(allGames))
    .catch(err =>  next(err))
});


//GET - display specific game 
router.get('/:gameId', (req, res, next) => {
    const { gameId } = req.params;

    Game.findById(gameId)
    .then(game => res.status(200).json(game))
    .catch(err => next(err))
});


//PUT - update a game
router.put('/:gameId', (req, res, next) => {
    const { gameId } = req.params;

    Game.findByIdAndUpdate(gameId, req.body, {new: true})
    .then(updatedGame => res.status(200).json(updatedGame))
    .catch(err => next(err))
});

//DELETE game from database
router.delete('/:gameId', (req, res, next) => {
    const { gameId } = req.params;

    Game.findByIdAndDelete(gameId)
    .then(deletedGame => res.sendStatus(204))
    .catch(err => next(err))
});

module.exports = router;