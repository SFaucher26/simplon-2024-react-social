import React, { useContext, useRef, useEffect } from "react";
import { getUserLogin, getUserByToken } from "../Services/Users";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserContext";
import { useCallback } from "react";

export function Formulaire() {
  // Initialisation d'un state de navigation
  const navigate = useNavigate();
  // récupération du contexte par le useContext
  const { setUserLog } = useContext(UserContext);
  // Utiliser un useRef pour mettre un focus
  const userNameInput = useRef();

  // Utiliser un useEffect pour afficher le focus après le chargement de la pge
  useEffect(()=>{
    userNameInput.current.focus()
  }, [userNameInput])

  // soumission du formulaire
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(e.target));

      const userToken = await getUserLogin(formData.pseudo, formData.password);
      console.log("user qui se log :", userToken);

      if (userToken) {
        setUserLog(userToken.token);
        navigate("/");
      }
    },
    [setUserLog, navigate]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Pseudo</label>
        <br />
        <input type="text" name="pseudo" ref={userNameInput}/>
        <br />
        <label>Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}
