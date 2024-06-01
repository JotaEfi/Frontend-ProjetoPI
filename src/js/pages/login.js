import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../services/api";

function Login() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  // State to store fetched user ID
  // const [userId, setUserId] = useState(null); // Initialize as null

  // Function to load all users and find the user ID by email
  const loadUsers = async (email) => {
    try {
      const response = await api.get(`/users`);
      const users = response.data.content; // Access the 'content' key
      
      // Check if users is an array
      if (Array.isArray(users)) {
        const user = users.find((user) => user.email === email);
        if (user) {
          return user.id;
        }
      } else {
        console.error("Resposta da API não é um array:", users);
      }
      
      return null;
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
      return null;
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const authString = "Basic " + btoa(email + ":" + password);
      const response = await api.get("/auth/login", {
        headers: { Authorization: authString },
      });

      if (response && response.data === "Successful") {
        console.log(response);
        localStorage.setItem("jwt", response.headers["authorization"]);
        console.log(response.headers["authorization"]);

        // Load user ID based on the email
        const userId = await loadUsers(email);
        if (userId) {
          localStorage.setItem("userId", userId);
        } else {
          console.error("Erro: ID do usuário não encontrado após o login.");
        }

        window.location.href = "/home";
      } else {
        throw new Error("Email ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage(error.message);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className="containerLogin pageContainer">
      <div className="Login">
        <form onSubmit={handleSignIn}>
          <h1>Login</h1>
          <label htmlFor="email">E-mail:</label>
          <div>
            <input
              className="inputError"
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Digite seu e-mail"
              onChange={handleUsernameChange}
              required
              autoComplete="off"
            />
          </div>
          <label htmlFor="password">Senha:</label>
          <div>
            <input
              className="inputError"
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={handlePasswordChange}
              required
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="recall-forget">
            <label className="checkLabel">
              <input type="checkbox" /> Lembrar de mim
            </label>
          </div>
          <button type="submit">Entrar</button>
          <p>
            Já tem uma conta?
            <a href="/" to="/" className={activeTab === "/" ? "active" : ""} onClick={() => handleTabClick("/")}>
              Faça o cadastro
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
