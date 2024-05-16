import {  useState } from "react"
// import { useLocation } from "react-router-dom"
// import { useEffect } from "react"
// import { Navigate } from "react-router-dom"
// // import { Link } from "react-router-dom"
// import axios from 'axios'
// import { AuthContext } from "../../context/auth"
import { api } from "../../services/api";

function Login () {
    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    // const { signIn, signed } = useContext(AuthContext)


    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        const authString = "Basic " + btoa(email + ":" + password);
        const response = await api.get("/auth/login", { headers: { Authorization: authString } });
        console.log(response);
        localStorage.setItem('jwt', response.headers['authorization']);
        console.log(response.headers['authorization'])
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        setErrorMessage(error.message);
    }
};
     
    // if(signed ) {
    //   // return <Navigate  to="/home" />
    // //   console.log(email)
    // } 


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      // mudança no campo de senha
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };



    // const location = useLocation();
    // const [activeTab, setActiveTab] = useState("");
  
    // useEffect(() => {
    //   setActiveTab(location.pathname);
    // }, [location.pathname]);

   
  
    // const handleTabClick = (path) => {
    //   setActiveTab(path);
    // };

    //funçao para enviar os dados
    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     const formData = {
    //         username: username,
    //         password: password
    //       };
      
    //       axios.post('http://localhost:8080/auth/login', formData, {
    //        headers: {
    //         'Content-Type': 'application/json'
    //       }
    //       })
          
    //         .then(response => {
    //           if (!response.data) { //retorno
    //             throw new Error('Credenciais inválidas');
    //           }
    //           // resposta do backend 
    //           console.log(response.data);
             
    //         })

    //         .catch(error => {
    //           setErrorMessage(error.message);// msg erro
    //         });
       
    // }

   
    return (
        <div className="containerLogin pageContainer">
            <div className="Login">

               <form onSubmit={handleSignIn}>
                    <h1>Login</h1>
                    <label htmlFor="email">E-mail:</label>
                    <div>
                        <input
                            id="email" name="email"
                            type="email"
                            value={email}
                            placeholder="Digite seu e-mail"
                            onChange={handleUsernameChange}
                            required
                            autoComplete='off'
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

                    <p>Não tem uma conta?
                        {/* <a href="register"
                        to="/"
                        id="register"
                        className={activeTab === "/register" ? "active" : ""}
                        onClick={() => handleTabClick("/register")}>
    </a> */}
                       Registre-se</p> 
                         
               </form>
            </div>
        </div>
    )
    
}

export default Login