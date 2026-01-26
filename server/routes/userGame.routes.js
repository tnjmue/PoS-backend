const router = require('express').Router();
const UserGame = require('../models/UserGame.model');

//POST - create a new game of user??? unnecessary, bc user games can only be added to collection from game database
router.post('/', (req, res, next) => {
    Game.create(req.body)
    .then( newGame => res.status(201).json(newGame))
    .catch( err => next(err))
})

//GET - display all of the user's games
router.get('/', (req, res, next) => {
    UserGame.find(req.query)
    .then(allGames => res.status(200).json(allGames))
    .catch(err =>  next(err))
})

//GET - display specific game of user
router.get('/:userGameId', (req, res, next) => {
    const { userGameId } = req.params;
    Game.findById(userGameId)
    .then(game => res.status(200).json(game))
    .catch(err => next(err))
})

//PUT - update a game of user
router.put('/:userGameId', (req, res, next) => {
    const { userGameId } = req.params;
    Game.findByIdAndUpdate(userGameId, req.body, {new: true})
    .then(updatedGame => res.status(200).json(updatedGame))
    .catch(err => next(err))
})

//DELETE game from user's stack
router.delete('/:userGameId', (req, res, next) => {
    const { userGameId } = req.params;
    Game.findByIdAndDelete(userGameId)
    .then(deletedGame => res.status(204).json({'message': `${deletedGame} has been deleted.`}))
    .catch(err => next(err))
})