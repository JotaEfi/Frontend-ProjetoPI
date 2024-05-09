import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const handleTabClick = (path) => {
        setActiveTab(path);
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        window.location.href = "/home";

    }


    return (
        <div className="containerLogin pageContainer">
            <div className="Login">

                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="email">E-mail:</label>
                    <div>
                        <input
                            id="email" name="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="false"
                            required
                        />
                    </div>

                    <label htmlFor="password">Senha:</label>
                    <div>
                        <input
                            id="password" name="password"
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="recall-forget">
                        <label className="checkLabel">
                            <input type="checkbox" />
                            Lembrar de mim
                        </label>

                    </div>

                    <button type="submit">
                        <Link to="/home"></Link> Entrar
                    </button>

                    <p>Não tem uma conta?
                        <a href="register"
                            to="/"
                            id="register"
                            className={activeTab === "/register" ? "active" : ""}
                            onClick={() => handleTabClick("/register")}>
                            Registre-se</a></p>

                </form>
            </div>
        </div>
    )
}

export default Login