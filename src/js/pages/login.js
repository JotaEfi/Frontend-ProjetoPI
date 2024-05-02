import { useState } from "react"

function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        alert("Enviando os dados: " + username + " - " + password)
    }
    return (
        <div className="Login">
           <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <label for="email">E-mail:</label>
                <div>
                    <input 
                        id="email" name="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="false"
                    />

                </div>
                
                <label for="password">Senha:</label>
                <div>
                    <input 
                         id="password" name="password"
                         type="password"
                         placeholder="Digite sua senha"
                         onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="recall-forget">
                    <label className="checkLabel">
                        <input type="checkbox"/>
                        Lembrar de mim
                    </label>
                    
                </div>

                <button type="submit">Entrar</button>




           </form>
        </div>
    )
}
//CENTRALIZAR DIV E FAZER ROUTER
//CRIAR REGISTRO E TAMBÉM ROUTER PARA LOGIN OU TELA INICIAL
export default Login