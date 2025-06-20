import { useEffect, useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import LogoComponent from '../components/LogoComponent';
import SongComponent from '../components/Song/SongComponent';

function HomeView() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://mehiraserver.onrender.com/song/get')
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Erreur lors du fetch des chansons:", err));
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <LogoComponent />
          </div>
          <div className="searchbar-container">
            <input type="text" placeholder="Faites une recherche ..." />
          </div>
          <div className="button-container">
            <ButtonComponent text="Se connecter" />
          </div>
        </nav>
      </header>

      <main>
        <aside></aside>
        <section>
          <ul>
            {songs.map(song => (
              <SongComponent
                key={song._id}
                title={song.title}
                author={song.author}
                src={song.file_url}
              />
            ))}
          </ul>
        </section>
        <aside></aside>
      </main>
    </>
  );
}

export default HomeView;
