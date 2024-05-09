import { useCallback, useState } from "react";
import { postUser } from "../Services/Users";
import { useNavigate } from "react-router-dom";


export function Signup(){
// Initialisation d'un state de navigation
const navigate = useNavigate();

// utilisation d'un useState pour récupérer l'état du nouveau user
const [newUser, setNewUser] = useState(null);
//soumission du formulaire
const handleSubmit = (
async (e) =>{
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    const userSignup = await postUser(formData.username, formData.email, formData.password);
    
    console.log(userSignup);

    if(userSignup){
        setNewUser(userSignup);
        navigate("/login");
    }
} 

);
console.log(newUser);
return(
<>
        <form onSubmit={handleSubmit}>
            <div>
            <label for="inputPseudo">Pseudo</label><br/>
              <input
                type="text"
                className="input"
                name="username"
                id="inputPseudo"
                placeholder="Votre pseudo"
              />
              
            </div>
            <div>
            <label for="inputEmail">Email</label><br/>
              <input
                type="email"
                className="input"
                name="email"
                id="inputEmail"
                placeholder="email"
              />
              
            </div>
            <div >
            <label for="inputPassword">
                Mot de passe</label><br/>
              <input
                type="password"
                className="input"
                name="password"
                id="inputPassword"
                placeholder="Password"
              />
              
            </div><br/>
            <button
              type="submit"
              value="Login"
              >
              Valider
            </button>
        </form>
</>
)
}