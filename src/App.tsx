import "./App.css";
import axios from "axios";
import { useState } from "react";

type GITHUBResponse = {
  name: string;
  avatar_url: string;
  bio: string;
};

function App() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("Aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");

  const handleSearch = () => {
    axios
      .get<GITHUBResponse>(`https://api.github.com/users/${userName}`)
      .then((res) => {
        setName(res.data.name);
        setBio(res.data.bio);
        setAvatarURL(res.data.avatar_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-app">
      <div className="container">
        <header className="header-top">
          <ul>
            <li>Jovem Programador</li>
          </ul>
        </header>
        <main>
          <div className="form">
            <h1>Buscador de Perfis do GITHUB</h1>
            <input
              type="text"
              placeholder="Digite um username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div className="content">
            <div>
              <img src={avatarURL} alt="Perfil" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
