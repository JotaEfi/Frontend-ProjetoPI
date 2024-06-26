import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { signup } from "../../services/signup"

function Register () {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState('');

    const handleSaveUser = async (e) => {
        e.preventDefault();
        const userData = {
     
            email, 
            password, 
        
        }

        try {
            await signup
            .post("/auth/signup", {
                email: userData.email,
                password: userData.password,
            }, 
        )
            .then((response) => {
                console.log(response);
                window.location.href = '/home';
                 
            });
           
        } catch (error) {
            console.error('Erro ao tentar registrar usuário:', error);
            // Tratar o erro de acordo com as necessidades da sua aplicação
            setErrorMessage("Erro ao tentar registrar usuário. Por favor, tente novamente.");
        }
    };
        
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      // mudança no campo de senha
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };



    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
  
    useEffect(() => {
      setActiveTab(location.pathname);
    }, [location.pathname]);
  
    const handleTabClick = (path) => {
      setActiveTab(path);
    };

   
    return (
        <div className="containerLogin pageContainer">
            <div className="Login">

               <form onSubmit={handleSaveUser}>
                    <h1>Registro</h1>
                    <h2>Bem-vindo ao Monza96!</h2>

                    <label htmlFor="name">Nome:</label>
                    <div>
                        <input
                            id="name" name="nome"
                            type="nome"
                            value={username}
                            placeholder="Digite seu nome"
                            onChange={handleUsernameChange}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <label htmlFor="email">E-mail:</label>
                    <div>
                        <input
                            id="email" name="email"
                            type="email"
                            value={email}
                            placeholder="Digite seu e-mail"
                            onChange={handleEmailChange}
                            required
                            autoComplete="off"
                        />
                    </div>
            
                    <label htmlFor="password">Senha:</label>
                    <div>
                        <input
                             id="password" name="password"
                             type="password"
                             value={password}
                             placeholder="Digite sua senha"
                             onChange={handlePasswordChange}
                             required
                             autoComplete="off"
                        />
                    </div>
                    {errorMessage && <p>{errorMessage}</p>}
                    <div className="recall-forget">
                        <label className="checkLabel">
                            <input type="checkbox"/>
                            Lembrar de mim
                        </label>
            
                    </div>
                   
                    <button type="submit">
                       Entrar
                    </button>

                    <p>Já tem uma conta?
                        <a href="/auth/login"
                        to="/auth/login"
                        id="login"
                        className={activeTab === "/auth/login" ? "active" : ""}
                        onClick={() => handleTabClick("/auth/login")}>
                        Faça o login</a></p>
                         
               </form>
            </div>
        </div>
    )
}

export default Register