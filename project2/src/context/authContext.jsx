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

  function login({ email, password }) {
    const userExist = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!userExist) {
      setError("credenziali errate");
      return { esito: false, messaggio: "credenziali errate" };
    }

    setUser(userExist);
    setError(null);
    localStorage.setItem("user", JSON.stringify(userExist));
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
      return;
    }
    setUsers((prev) => [...prev, userData]);
    setError(null);
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
