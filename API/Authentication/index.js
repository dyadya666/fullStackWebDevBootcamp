import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
// const API_URL = "https://secrets-api.appbrewery.com/";
const API_URL = "http://localhost:4000";

const yourUsername = "newUser12314";
const yourPassword = "afjeq32";
const yourAPIKey = "ae6f935b-281f-447e-be99-6cd8fe11b261";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/random`);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch random secret." });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch secrets with basic auth." });
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/filter`, {
      params: {
        apiKey: yourAPIKey,
        score: 5,
      }
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch secrets with API key." });
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch secret with bearer token." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
