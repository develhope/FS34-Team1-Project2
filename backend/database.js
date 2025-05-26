import mysql from "mysql2/promise";

const db = async ()=>{mysql.createConnection({
  host: "localhost",
  port: 80,
  database: "celestique",
});

try {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      cognome VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      eta INT NOT NULL,
      password VARCHAR(255) NOT NULL,
      cellulare VARCHAR(20) NOT NULL
    )
  `);
  console.log("Tabella creata correttamente");
} catch (error) {
  console.error("Errore durante la creazione della tabella:", error);
}

export default db;
