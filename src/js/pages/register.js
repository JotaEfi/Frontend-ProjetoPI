import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
// import { Link } from "react-router-dom"


import { api } from "../../services/api"

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
            const response = await api.post("/auth/register", userData); // Ajuste para a rota de registro
            // const { token, user } = response.data;


            // localStorage.setItem("@Auth:token", token); //VER ISSO
            // localStorage.setItem("@Auth:user", JSON.stringify(response.config.data.userData)); //VER ISSO
            // localStorage.setItem(userData)


            console.log(response); //RESPONSE PARA VER OS DADOS


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

    //funçao para enviar os dados
    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     const formData = {
    //         email: username,
    //         password: password
    //       };
      
    //       axios.post('http://localhost:8080/auth/login', formData, {
    //        headers: {
    //         'Content-Type': 'application/json'
    //       }
    //       })
          
    //       .then(response => {
    //         if (!response.data) {
    //             throw new Error('Credenciais inválidas');
    //         }
    
    //         // Verificar se o cabeçalho de autorização está presente na resposta
    //         if (!response.headers || !response.headers.authorization) {
    //             throw new Error('Cabeçalho de autorização ausente na resposta');
    //         }
    
    //         // Extrair o token do cabeçalho de resposta
    //         const authorizationHeader = response.headers.authorization;
    //         const token = authorizationHeader.split('Bearer ')[1]; // Remover o prefixo "Bearer"
            
    //         // Armazenar o token no localStorage
    //         localStorage.setItem('token', token);
    
    //         // Armazenar os dados do usuário (se necessário)
    //         localStorage.setItem('userData', JSON.stringify(formData));
    
    //         console.log(response.data);
    //         window.location.href = '/home'; // redirecionar o usuário para outra página após o login bem-sucedido
    //     })
    //     .catch(error => {
    //         setErrorMessage(error.message);
    //     })
       
    // }

   
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
                        <a href="login"
                        to="/login"
                        id="login"
                        className={activeTab === "/login" ? "active" : ""}
                        onClick={() => handleTabClick("/login")}>
                        Faça o login</a></p>
                         
               </form>
            </div>
        </div>
    )
}

export default Register