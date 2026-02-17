const router = require('express').Router();
const UserGame = require('../models/UserGame.model');

//POST - add a new game to user's collection
router.post('/', (req, res, next) => {
    const { gameId, stack } = req.body;
    const userId = req.payload._id;

    UserGame.create({gameId, userId, stack})
    .then( newGame => res.status(201).json(newGame))
    .catch( err => next(err))
})

//GET - display all of the user's games
router.get('/', (req, res, next) => {
    UserGame.find(req.query).populate('gameId')
    .then(allGames => res.status(200).json(allGames))
    .catch(err =>  next(err))
})

//GET - display specific game of user
router.get('/:userGameId', (req, res, next) => {
    const { userGameId } = req.params;
    UserGame.findById(userGameId)
    .then(game => res.status(200).json(game))
    .catch(err => next(err))
})

//PUT - update a game of user
router.put('/:userGameId', (req, res, next) => {
    const { userGameId } = req.params;
    UserGame.findByIdAndUpdate(userGameId, req.body, {new: true})
    .then(updatedGame => res.status(200).json(updatedGame))
    .catch(err => next(err))
})

//DELETE game from user's stack
router.delete('/:userGameId', (req, res, next) => {
    const { userGameId } = req.params;
    UserGame.findByIdAndDelete(userGameId)
    .then(deletedGame => res.sendStatus(204))
    .catch(err => next(err))
})

module.exports = router;