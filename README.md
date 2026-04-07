<!-- 🔥 Animated Header -->
<h1 align="center">⚡ RESTful API</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&pause=1000&color=00F7FF&center=true&vCenter=true&width=700&lines=Scalable+Backend+API;Node.js+%7C+Express+%7C+MongoDB;Secure+and+RESTful+Design" />
</p>

---

## 🚀 Overview

A **robust and clean RESTful API** built using **Node.js, Express, and MongoDB**.  
This project demonstrates how to build API endpoints, serve static files, and render dynamic views using Express.


---

## ✨ Features

- 🔐 Authentication & Authorization  
- 📡 RESTful API Design  
- 🧠 MVC Architecture  
- ⚡ CRUD Operations  
- 🔒 Middleware-based Security  
- 🌐 JSON-based Data Handling  

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,git,github" />
</p>

---

## 📁 Project Structure

    RESTful-API/
    │
    ├── controllers/  # Business logic
    ├── models/       # Database schemas
    ├── routes/       # API endpoints
    ├── middleware/   # Auth & validation
    ├── config/       # DB configuration
    │
    ├── app.js        # Express app
    ├── server.js     # Entry point
    ├── package.json
    └── .env


---

## 📡 API Endpoints

### 🏠 Home

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/` | Welcome message |

---

### 📝 Posts

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/posts` | Get all posts |
| GET | `/posts/new` | Render form to create new post |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | Get a single post |
| GET | `/posts/:id/edit` | Render edit form |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

---

## 🔄 CRUD Flow

    
    Create  → POST   /posts
    Read    → GET    /posts
    Read    → GET    /posts/:id
    Update  → PATCH  /posts/:id
    Delete  → DELETE /posts/:id

---

## 🧠 How It Works

1. User visits `/posts` → sees all posts  
2. Creates new post via `/posts/new`  
3. Data submitted → stored in MongoDB  
4. Response returned as JSON  
5. Each post has a unique `uuid`  

### 🔄 User Actions

- View post → `/posts/:id`  
- Edit post → `/posts/:id/edit`  
- Update post → `PATCH /posts/:id`  
- Delete post → `DELETE /posts/:id`  

---

## ⚠️ Notes

- Uses method-override for PATCH & DELETE
- Data is stored in memory (not database)
- Page rendering handled via EJS templates

---

## 🎬 Preview

<p align="center">
  <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="500"/>
</p>

---

## 📈 Future Enhancements

- 🔄 Refresh Tokens  
- 📊 API Rate Limiting  
- 🧾 Swagger Documentation  
- ☁️ Deployment (AWS / Render)  
- 🐳 Docker Support  

---

## 👨‍💻 Author

Made with ❤️ by [Sohan Samanta](https://github.com/Sohan-hub11)

---

⭐ If you found this helpful, give it a **star** and consider contributing!
