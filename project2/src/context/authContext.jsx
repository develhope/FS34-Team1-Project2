import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const localUsers = localStorage.getItem("users");
    return localUsers ? JSON.parse(localUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  async function login(data) {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setUser(result.user);
        console.log("if");
        console.log(result.user);
      } else {
        setMessage(result.message);
        setUser(null);
        console.log("else");
      }
    } catch (error) {
      console.log("catch");
      console.error(error);
      setMessage("errore");
      setUser(null);
    }
  }

  function validate(password) {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  }

  function registrazione(userData) {
    const userExist = users.find((user) => user.email === userData.email);

    if (userExist) {
      setError("email già registrata");
      return { esito: false, messaggio: "Email già registrata" };
    }
    if (!validate(userData.password)) {
      setError(
        "La password deve contenere almeno 8 caretteri, una lettera maiuscola, un carattere speciale ed alemno un numero."
      );
      return {
        esito: false,
        messaggio:
          "La password deve contenere almeno 8 caretteri, una lettera maiuscola, un carattere speciale ed alemno un numero.",
      };
    }
    setUsers((prev) => [...prev, userData]);
    setError(null);
    return { esito: true, messaggio: null };
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, users, login, registrazione, logout, error, validate }}
    >
      {children}
    </AuthContext.Provider>
  );
}
