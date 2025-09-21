# 🏀 NBA Players API

A simple **CRUD REST API** built with **Express.js** to manage NBA players.  
Includes **Swagger/Redoc API documentation**, request validation, logging, and support for deployment on **Vercel**.

----------

## ✨ Features

-   📌 **CRUD Endpoints** for managing players
    
-   🆔 Unique player IDs generated via `uuid`
    
-   📝 Request logging with `morgan`
    
-   ✅ Request validation middleware
    
-   📖 API documentation with **Swagger (local)** 
    
-   🌐 Ready-to-deploy on **Vercel**
    

----------

## 📂 Project Structure
```
NBA-CRUD-Express/
│── routes/
│   └── player.js         # Player routes + Swagger
│── controllers/
│   └── playerController.js # CRUD logic
│── middleware/
│   └── validatePlayer.js   # Player validation middleware
│── index.js
│── package.json
│── package-lock.json
│── README.md
│── LICENSE 
│── .gitignore
```
----------

## ⚙️ Installation & Setup

1.  **Clone the repository**
    
```bash
git clone https://github.com/Talha-Tahir2001/NBA-CRUD-Express
```
```bash 
cd NBA-CRUD-Express
```    
2.  **Install dependencies**
    
    `npm install` 
    
3.  **Run locally**
    
    `npm start` 
    
    or
    
    `node index.js` 
    
4.  **Server runs at**
    
    `http://localhost:3000` 
    

----------

## 📖 API Documentation

### 🔹 Local Development

When running locally, visit:

`http://localhost:3000/api-docs` 

👉 Uses **Swagger UI** for interactive docs.

### 🔹 Deployment (Vercel)

When deployed to Vercel, visit:

`https://nba-crud-express.vercel.app/api/players` 

Swagger UI Doesn't work right now so you can't go to either

`http://nba-crud-express.vercel.app/api-docs/`

OR

`http://nba-crud-express.vercel.app/api-docs/#/Players/get_api_players`

----------

## 📌 API Endpoints

### 👥 Players

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/api/players`      | Get all players          |
| GET    | `/api/players/:id`  | Get player by ID         |
| POST   | `/api/players`      | Create a new player      |
| PUT    | `/api/players/:id`  | Update a player by ID    |
| DELETE | `/api/players/:id`  | Delete a player by ID    |


----------

## 🏗 Example Player Schema

`
{
  "id": "uuid-generated",
  "firstName": "LeBron",
  "lastName": "James",
  "position": "Small Forward",
  "team": "Los Angeles Lakers",
  "number": 23,
  "height": "6 ft 9 in",
  "weight": "250 lbs"
}
` 

----------

## 🧰 Middleware

-   **ValidatePlayer** → ensures required fields (`firstName`, `lastName`, `team`, `position`) are provided before creating/updating a player.
    
-   **Morgan Logger** → logs all HTTP requests for easier debugging.
    

----------

## 🚀 Deployment (Vercel)

1.  Push your code to GitHub.
    
2.  Connect your repo to Vercel.
    
3.  Deploy — no extra config needed!
    

Optional: If you want more control, add a vercel.json:

`{  "version":  2,  "builds":  [  {  "src":  "index.js",  "use":  "@vercel/node"  }  ],  "routes":  [  {  "src":  "/(.*)",  "dest":  "/"  }  ]  }` 

----------

## 🛠 Tech Stack

-   **Backend:** Node.js, Express.js
    
-   **Docs:** Swagger (Local)
    
-   **Validation:** Custom middleware
    
-   **Logging:** Morgan
    
-   **Deployment:** Vercel
    

----------

## 🤝 Contributing

Contributions are welcome! 🎉


### How to Contribute

1. **Fork the repository**
   - Click the "Fork" button on the top right of this page.
2. **Clone your forked repo**
   ```bash
   git clone https://github.com/Talha-Tahir2001/NBA-CRUD-Express.git
   cd NBA-CRUD-Express
   ```
3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes and commit**
   ```bash
   git commit -m "Add your message"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a pull request**
   ```bash
   Go to the original repo and click "Compare & pull request".
   ```
    

----------

## 📜 License

This project is open-source and available under the [MIT License](https://github.com/Talha-Tahir2001/NBA-CRUD-Express/blob/main/LICENSE).

----------

## 👨‍💻 Author

**Talha Tahir**

-   GitHub: [@Talha-Tahir2001](https://github.com/Talha-Tahir2001)
    
-   LinkedIn: [Talha Tahir](https://www.linkedin.com/in/talha-tahir2001/)

------------
🔥 With this API, you can easily manage NBA players and extend it into a full-stack app (React/Angular frontend + this backend).

------------
