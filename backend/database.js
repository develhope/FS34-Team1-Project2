import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root", // oppure l'utente corretto
  password: "", // la password impostata in MySQL
  database: "celestique",
  port: 3306, // tipico di MySQL
});

// Creazione tabella se non esiste
try {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      cognome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      eta INT NOT NULL,
      password VARCHAR(255) NOT NULL,
      cellulare VARCHAR(255) NOT NULL
    )
  `);
  console.log("Tabella creata correttamente");
} catch (error) {
  console.error("Errore durante la creazione della tabella", error);
}

export default db;
