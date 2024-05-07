import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function Register () {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
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

        window.alert(name + " - " + username + " - " + password)
        window.location.href = "/home";
       
    }

    return(
        <div className="containerLogin pageContainer">
            <div className="Login">
                 <form onSubmit={handleSubmit}>
                        <h1 className="title">Registro</h1>
                        <h2 className="subtitle">Bem Vindo ao Monza96!</h2>

                        <label for="name">Nome:</label>
                        <div>
                            <input
                                id="name" name="name"
                                type="text"
                                placeholder="Digite seu nome"
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="false"
                                required
                            />
                        </div>

                        <label for="email">E-mail:</label>
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
            
                        <label for="password">Senha:</label>
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
                                <input type="checkbox"/>
                                Lembrar de mim
                            </label>
            
                        </div>
            
                        <button type="submit">
                            <Link to="/home"></Link> Registrar
                        </button>
                            <p>Já tem uma conta? 
                            <a href="/"
                            to="/"
                            id="login"
                            className={activeTab === "/" ? "active" : ""}
                            onClick={() => handleTabClick("/login")}> 
                            Faça o Login</a></p>
                   </form>
            </div>
        </div>
    )
}

export default Register