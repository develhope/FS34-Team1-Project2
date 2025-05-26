import express from "express";
import cors from "cors";

import dataBase from "./database.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const db = await dataBase.many("SELECT * FROM users");
    res.status(200).json(db);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.post("/users/register", async (req, res) => {
  const { nome, cognome, email, eta, password, cellulare } = req.body;
  try {
     await dataBase.none(
      "INSERT INTO users (nome, cognome, email, eta, password, cellulare) VALUES ($1, $2, $3, $4, $5, $6)",[
        nome,
        cognome,
        email,
        eta,
        password,
        cellulare
      ])
     return res.status(201).json({ message: "utente registrato con successo" });
  } catch (error) {
     return res.status(500).json({ error: error.message });
  }
 

});

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await dataBase.one("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password] )
    return res
        .status(200)
        .json({ message: "login effettuato con successo", user: userExist });
  } catch (error) {
     return res.status(400).json({ error: error.message });
  }
  
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await dataBase.one("SELECT * FROM users WHERE id = $1", [id]);
     res.status(200).json(users);
  } catch (error) {
     res.status(404).send("id non trovato");
  }
 
});

app.put("/users/update/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, cognome, eta, password, cellulare } = req.body;
  try {
    const userExist = await dataBase.none("UPDATE users SET nome=$1, cognome=$2, eta=$3, password=$4, cellulare=$5 WHERE id =$6  ", [
      nome, cognome, eta, password, cellulare, id]);
      return res
        .status(200)
        .json({ message: "Modifica effettuata con successo", user: userExist });
    
    // }
  } catch (error) {
     return res.status(400).json({errore: error.message });
  }

});

app.delete("/users/delete/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return res.status(200).json({ message: "Utente eliminato con successo" });
  } else {
    return res.status(404).json({ message: "Id non trovato" });
  }
});

app.post("/orders", (req, res) => {
  const { userId, prodotti } = req.body;
  const userExist = users.find((user) => user.id == userId);
  if (userExist) {
    if (!userExist.acquisti) {
      userExist.acquisti = [];
    }
    userExist.acquisti.push(prodotti);
    return res
      .status(200)
      .json({
        message: "Acquisto effettuato con successo",
        acquisti: userExist.acquisti,
      });
  } else {
    return res.status(404).json({ message: "Id non trovato" });
  }
});

app.get("/orders/:id", (req, res) => {
  const { id } = req.params;
  const userExist = users.find((user) => user.id == id);
  if (userExist) {
    if (userExist.acquisti) {
      return res.status(200).json({ acquisti: userExist.acquisti });
    } else {
      return res.status(404).json({ message: "Nessun acquisto trovato" });
    }
  } else {
    return res.status(404).json({ message: "Id non trovato" });
  }
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
