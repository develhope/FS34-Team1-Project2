import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const utenti = [];

app.get("/", (req, res) => {
  if (utenti) {
    res.json(utenti);
  } else if (utenti.length) {
    res.status(404).send("errore utenti non trovati");
  } else {
    res.status(404).send("errore la pagina non è stata trovata");
  }
});

app.post("/registrazione", (req, res) => {
  const { nome, cognome, email, eta, cellulare, password } = req.body;
  utenti.push({ nome, cognome, email, eta, cellulare, password });
  res.status(200).json({ message: "Utente registrato con successo" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "Login ricevuto", email, password });
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
