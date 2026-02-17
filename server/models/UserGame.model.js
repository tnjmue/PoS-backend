const { Schema, model } = require("mongoose");

const userGameSchema = new Schema(
    {
        gameId: { type: Schema.Types.ObjectId, ref: "Game" },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        stack: { type: String, enum: ["Want to play", "Owned", "Currently playing", "Played"], required: true },
        platforms: { type: String, enum: ["PC", "PlayStation", "Xbox", "Nintendo", "Mac", "Linux", "Web"], required: false },
        personalRating: { type: Number, min: 0, max: 5},
        hoursPlayed: { type: Number, min: 0 },
        notes: { type: String }
    },
    { timestamps: true }
);

const UserGame = model("UserGame", userGameSchema);

module.exports = UserGame;