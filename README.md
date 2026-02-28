# 🎮 Pile of Shame

### *Backend repository*

**Frontend:** https://github.com/tnjmue/PoS-frontend

**Live Demo:** https://pile-of-shame-games.netlify.app/

## 𖡊 the idea behind the project 

Pile of Shame is a video game logging platform inspired by Goodreads - but make it games!
For a more elaborate description, see the frontend README.

## ⌨ built with
- Node.js & Express
- MongoDB & Mongoose
- JWT & bcrypt

## ➤ how to get started locally:

### prerequisites
- Node.js installed
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### installation
1. Clone the repo:
```
   git clone https://github.com/tnjmue/PoS-backend.git
```
2. Navigate to the project folder:
```
   cd PoS-backend
```
3. Install dependencies:
```
   npm install
```
4. Create a `.env` file in the root folder with:
```
   PORT=5005
   ORIGIN=http://localhost:5173
   TOKEN_SECRET=your_secret_token_here
   MONGODB_URI=your_mongodb_connection_string
```
5. Run the development server:
```
   npm run dev
```

The server will run on `http://localhost:5005`

** *Note:* You'll need to replace your_secret_token_here with any random string and your_mongodb_connection_string with your actual MongoDB URI if you want to run it locally with your own database!

---

## 📡 api endpoints

### Authentication
- `POST /auth/signup` - Create new user
- `POST /auth/login` - Login user
- `GET /auth/verify` - Verify JWT token

### Games
- `GET /api/games` - Get all games
- `GET /api/games/:gameId` - Get single game

### User Games
- `GET /api/userGames` - Get user's game library
- `POST /api/userGames` - Add game to library
- `GET /api/userGames/:userGameId` - Get single user game
- `PUT /api/userGames/:userGameId` - Update user game
- `DELETE /api/userGames/:userGameId` - Delete user game

---