import express from "express";
import cors from "cors";
import db from "./database.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const [users] = await db.execute("SELECT * FROM users");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Errore nel recupero utenti");
  }
});

app.post("/users/register", async (req, res) => {
  const { nome, cognome, email, eta, password, cellulare } = req.body;
  try {
    const [existing] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "Utente già registrato" });
    }

    await db.execute(
      "INSERT INTO users (nome, cognome, email, eta, password, cellulare) VALUES (?, ?, ?, ?, ?, ?)",
      [nome, cognome, email, eta, password, cellulare]
    );

    res.status(201).json({ message: "Utente registrato con successo" });
  } catch (error) {
    res.status(500).json({ message: "Errore nel registro utente" });
  }
});

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length > 0) {
      res
        .status(200)
        .json({ message: "Login effettuato con successo", user: rows[0] });
    } else {
      res.status(400).json({ message: "Credenziali errate" });
    }
  } catch (error) {
    res.status(500).json({ message: "Errore nel login" });
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send("ID non trovato");
    }
  } catch (error) {
    res.status(500).send("Errore durante la ricerca dell'utente");
  }
});

app.put("/users/update/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, cognome, eta, password, cellulare } = req.body;

  try {
    const fields = [];
    const values = [];

    if (nome) {
      fields.push("nome = ?");
      values.push(nome);
    }
    if (cognome) {
      fields.push("cognome = ?");
      values.push(cognome);
    }
    if (eta) {
      fields.push("eta = ?");
      values.push(eta);
    }
    if (password) {
      fields.push("password = ?");
      values.push(password);
    }
    if (cellulare) {
      fields.push("cellulare = ?");
      values.push(cellulare);
    }

    if (fields.length === 0)
      return res.status(400).json({ message: "Nessun campo da aggiornare" });

    values.push(id);
    await db.execute(
      `UPDATE users SET ${fields.join(", ")} WHERE id = ?`,
      values
    );

    res.status(200).json({ message: "Modifica effettuata con successo" });
  } catch (error) {
    res.status(500).json({ message: "Errore durante l'aggiornamento" });
  }
});

app.delete("/users/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.execute("DELETE FROM users WHERE id = ?", [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Utente eliminato con successo" });
    } else {
      res.status(404).json({ message: "ID non trovato" });
    }
  } catch (error) {
    res.status(500).json({ message: "Errore durante l'eliminazione" });
  }
});
