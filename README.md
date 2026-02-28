# 🎮 Pile of Shame

### *Backend repository*

Backend deployed on **Render**  
Database hosted on **MongoDB Atlas**  
Frontend deployed on **Netlify**

**Frontend folder:** https://github.com/tnjmue/PoS-frontend

**Backend deployed:** https://pile-of-shame.onrender.com/

## 𖡊 the idea behind the project: 

Pile of Shame is a video game logging platform inspired by Goodreads - but make it games!
For a more elaborate description, see the frontend README.

## ⌨ built with:
- Node.js
- Express
- MongoDB & Mongoose
- JWT authentication
- bcrypt password hashing

## ➤ how to get started locally:

### prerequisites
- Node.js installed
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### installation
1. Clone the repo:
```
   git clone https://github.com/tnjmue/PoS-backend.git
```
2. Navigate to the server folder:
```
   cd PoS-backend/server
```
3. Install dependencies:
```
   npm install
```
4. Create a `.env` file in the server folder with:
```
   PORT=5005
   ORIGIN=http://localhost:5173
   TOKEN_SECRET=your_secret_token_here
   MONGODB_URI=your_mongodb_connection_string
```
- **For TOKEN_SECRET:** Generate a secure random string (or make one up if you're just playing with this).
- **For MONGODB_URI:** That's your MongoDB Atlas connection string - make sure your IP and the IP(s) of the service you're hosting from (Render in my case) are whitelisted on Atlas!
Your connection string will look somewhat like this:  
*mongodb+srv://username:password@cluster-name.random.mongodb.net/database-name?retryWrites=true&w=majority*  
Make sure your template includes the database-name. You can leave it out and the backend deployment will still be successful - but Atlas will generate an empty "test" database for you and you won't be able to access the data you actually want.

5. Run the development server:
```
   npm run dev
```

The server will run on `http://localhost:5005`


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
