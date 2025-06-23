import db from "./database.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

async function cryptingPassword() {
  const salt = parseInt(process.env.VITE_SALT);
  try {
    const salvaPassword = await db.many(` SELECT password, id FROM users `);
    salvaPassword.forEach(async (utente) => {
      const { password, id } = utente;
      const passwordCryptata = await bcrypt.hash(password, salt);
      await db.none(`UPDATE users SET password=$1 WHERE id=$2`, [
        passwordCryptata,
        id,
      ]);
    });
    console.log("operazione di criptaggio completata!");
  } catch (error) {
    console.error(error);
  }
}
cryptingPassword();
