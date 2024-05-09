import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { useState } from "react";
import FeedPage from "./Pages/FeedPage";
import Wrapper from "./Wrapper";
import { UserContext } from "./Providers/UserContext";
import { Signup } from "./Pages/Signup";

function App() {
  const [userLog, setUserLog] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          userLog,
          setUserLog,
        }}
      >
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path="/" element={<FeedPage />} />

              <Route path="/Login" element={<LoginPage />} />

              <Route path="/signup" element= {<Signup/>} />

              <Route path="*" element={<p>Pas de page pour cet URL</p>} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
export default App;
