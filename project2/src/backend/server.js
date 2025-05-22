import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const utenti = [];

app.get("/users", (req, res) => {
  if (utenti) {
    res.json(utenti);
  } else if (utenti.length) {
    res.status(404).send("errore utenti non trovato");
  } else {
    res.status(404).send("errore la pagina non è stata trovata");
  }
});

app.post("/users/register", (req, res) => {
  const { nome, cognome, email, eta, password, cellulare } = req.body;
  const userExist = utenti.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
  if (userExist) {
    return res.status(404).json({ message: "utente già registrato" });
  } else {
    const newUser = {
      id: Date.now(),
      nome: nome,
      cognome: cognome,
      email: email,
      eta: eta,
      password: password,
      cellulare: cellulare,
    };
    utenti.push(newUser);
    return res.status(201).json({ message: "utente registrato con successo" });
  }
});

app.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const userExist = utenti.find(
      (utente) =>
        utente.email.toLowerCase() === email.toLowerCase() &&
        utente.password === password
    );
    if (userExist) {
      return res
        .status(200)
        .json({ message: "login effettuato con successo", user: userExist });
    } else {
      return res.status(400).json({ message: "credenziali errate" });
    }
  } else {
    return res.status(404).json({ message: "inserisci email e password" });
  }
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const users = utenti.find((user) => user.id == id);
  if (users) {
    res.json(utenti);
  } else {
    res.status(404).send("id non trovato");
  }
});

app.put("/users/update/:id", (req, res) =>{
  const {id} = req.params
  const { nome, cognome, eta, password, cellulare } = req.body;
  const userExist = utenti.find(
    (user) => user.id == id 
  );
  if(userExist){
    if (nome !== undefined) userExist.nome = nome;
    if (cognome !== undefined) userExist.cognome = cognome;
    if (eta !== undefined) userExist.eta = eta;
    if (cellulare !== undefined) userExist.cellulare = cellulare;
    if (password !== undefined) userExist.password = password;
    return res
          .status(200)
          .json({ message: "Modifica effettuata con successo", user: userExist });
  } else {
    return res.status(404).json({ message: "Id non trovato" });
  }      
})

app.delete("/users/delete/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = utenti.findIndex((user) => user.id == id);
  if (userIndex !== -1) {
    utenti.splice(userIndex, 1);
    return res.status(200).json({ message: "Utente eliminato con successo" });
  } else {
    return res.status(404).json({ message: "Id non trovato" });
  }
})

app.post("/orders", (req, res) => {
  const { userId, prodotti } = req.body;
  const userExist = utenti.find((user) => user.id == userId);
  if (userExist) {
    if (!userExist.acquisti) {
      userExist.acquisti = [];
    }
    userExist.acquisti.push(prodotti);
    return res
      .status(200)
      .json({ message: "Acquisto effettuato con successo", acquisti: userExist.acquisti });
  } else {
    return res.status(404).json({ message: "Id non trovato" });
  }
});

app.get("/orders/:id", (req, res) => {
  const { id } = req.params;
  const userExist = utenti.find((user) => user.id == id);
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
