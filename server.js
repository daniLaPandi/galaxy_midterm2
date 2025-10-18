// this is javascript for the backend
import express from "express";
import cors from "cors";
const app = express();
const PORT = 3001;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // serve frontend (static files like css, images, JS) from public folder

const BASE_URL = "https://akabab.github.io/starwars-api/api";

// fetch all characters (this is a data request - a read)
app.get("/characters", async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/all.json`);
    const data = await response.json();    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

// fetch character by ID (for the search function) (this is another data request - a read)
app.get("/characters/id", async (req, res) => {
  try {
    const response = await fetch("https://akabab.github.io/starwars-api/api/id/${req.params.id}.json");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: "Character not found" });
    res.redirect('/');
  }
});

// start server 
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));