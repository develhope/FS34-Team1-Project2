import pgPromise from "pg-promise";

const dataBase = pgPromise();
const db = dataBase({
  host: "localhost",
  port: 5432,
  database: "celestique",
  password: "postgres",
  user: "postgres",
});

db.none(
  ` CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY, 
nome VARCHAR NOT NULL, 
cognome VARCHAR NOT NULL, 
email VARCHAR NOT NULL UNIQUE,
eta INT NOT NULL , 
password VARCHAR NOT NULL,
cellulare VARCHAR NOT NULL
)`
)
  .then(() => console.log("Tabella users creata correttamente"))

  .catch((error) =>
    console.error("Errore durante la creazione della tabella users", error)
  );

db.none(
  `CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(500),
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    brand VARCHAR(100),
    model VARCHAR(100),
    color VARCHAR(50),
    category VARCHAR(100),
    discount NUMERIC(5, 2) DEFAULT 0.00,
    popular BOOLEAN DEFAULT FALSE,
    onSale BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`
)
 .then(() => console.log("Tabella products creata correttamente"))

  .catch((error) =>
    console.error("Errore durante la creazione della tabella products", error)
  );


export default db;
