const gameSchema = new Schema(
    {
        title: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        dateAdded: { type: Date },
        image: { type: String },
        averageRating: { type: String, enum: ["positive", "okay", "negative"] },
        platforms: { type: String, enum: ["PC", "PlayStation", "Xbox", "Nintendo", "Mac", "Linux", "Web"] },
        genres: { type: String, enum: ["building", "card", "casual", "horror", "indie", "fighting", "MMO", "platformer", "puzzle", "RPG", "shooter", "simulation", "sports", "strategy", "survival"]}
    },
    { timestamps: true }
);

const Game = model("Game", stackGame);

module.exports = Game;