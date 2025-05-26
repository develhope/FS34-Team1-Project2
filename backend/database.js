import mysql from "mysql2/promise";

<<<<<<< HEAD
const db = await mysql.createConnection({
  host: "localhost",
  user: "root", // oppure l'utente corretto
  password: "", // la password impostata in MySQL
  database: "celestique",
  port: 3306, // tipico di MySQL
});

// Creazione tabella se non esiste
=======
const db = async ()=>{mysql.createConnection({
  host: "localhost",
  port: 80,
  database: "celestique",
});

>>>>>>> 28616e5670c493046225d7e88783fd97346b62a0
try {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
<<<<<<< HEAD
      nome VARCHAR(255) NOT NULL,
      cognome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      eta INT NOT NULL,
      password VARCHAR(255) NOT NULL,
      cellulare VARCHAR(255) NOT NULL
=======
      nome VARCHAR(100) NOT NULL,
      cognome VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      eta INT NOT NULL,
      password VARCHAR(255) NOT NULL,
      cellulare VARCHAR(20) NOT NULL
>>>>>>> 28616e5670c493046225d7e88783fd97346b62a0
    )
  `);
  console.log("Tabella creata correttamente");
} catch (error) {
<<<<<<< HEAD
  console.error("Errore durante la creazione della tabella", error);
=======
  console.error("Errore durante la creazione della tabella:", error);
>>>>>>> 28616e5670c493046225d7e88783fd97346b62a0
}

export default db;
