import pgPromise from "pg-promise";

const dataBase = pgPromise();

const db = dataBase({
  host: "localhost",
  port: 5432,
  database: "celestique",
});

db.none(
  ` CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY, 
nome VARCHAR NOT NULL, 
cognome VARCHAR NOT NULL, 
email VARCHAR NOT NULL UNIQUE
eta INT NOT NULL , 
password VARCHAR NOT NULL,
cellulare VARCHAR NOT NULL,
)`
)
  .then(() => console.log("Tabella creata correttamente"))

  .catch((error) =>
    console.error("Errore durante la creazione della tabella", error)
  );

export default db;
