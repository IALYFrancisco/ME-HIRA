import ButtonComponent from '../components/ButtonComponent'
import LogoComponent from '../components/LogoComponent';
import SongComponent from '../components/Song/SongComponent';

function HomeView () {

    return (
        <>
            <header>
                <nav>
                    <div className="logo-container">
                        <LogoComponent/>
                </div>
                    <div className="searchbar-container">
                        <input type="text" name="" id="" placeholder="Faite une recherche ..."/>
                    </div>
                    <div className="button-container">
                        <ButtonComponent text="Se connecter"/>
                    </div>
                </nav>
            </header>
            <main>
                <aside></aside>
                <section>
                    <ul>
                        <SongComponent author='Anatal' title='6000 euro' src='/images/Anatal - 6000 Euro ( Officiel Vidéo).mp3'/>
                        <SongComponent author='Ceis' title='Mogou' src='/images/Ceis - Mougou (Official Music Video).mp3'/>
                        <SongComponent author='Lion Hill' title='Angala fitia' src='/images/Lion Hill - Angala fitia (Official video).mp3'/>
                        <SongComponent author='Rim Ka' title='Glita' src='/images/Rim-Ka - GLITA (Official Video Music).mp3'/>
                        <SongComponent author='ZAKAI' title='MELODIE' src='/images/ZAKAI - MELODIE  (Clip officiel).mp3'/>
                    </ul>
                </section>
                <aside></aside>
            </main>
        </>
    )

    
}

export default HomeView;