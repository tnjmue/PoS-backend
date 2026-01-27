const router = require('express').Router();
const User = require('../models/User.model');

//POST - create a new user: through sign up -> auth.routes

//GET - for testing only, knowing id not necessary
router.get("/me", (req, res) => {
  User.findById(req.payload._id)
    .then(currentUser => res.json(currentUser))
    .catch(err => next(err));
});

//GET - display user profile
router.get('/:userId', (req, res, next) => {
    const { userId }= req.params;
    User.findById(userId)
    .then(user => res.status(200).json(user))
    .catch(err => next(err))
})

//PUT - edit user profile/info
router.put('/:userId', (req, res, next) => {
    const { userId }= req.params;
    User.findByIdAndUpdate(userId, req.body, {new: true})
    .then(updatedUser => res.status(200).json(updatedUser))
    .catch(err => next(err))
})

//DELETE - delete user account
router.delete('/:userId', (req, res, next) => {
    const { userId }= req.params;

    User.findByIdAndDelete(userId)
    .then(deletedUser => {
        if (req.payload._id === userId) {
        return res.sendStatus(204);
        }
    })
    .catch(err => next(err));
})


module.exports = router;