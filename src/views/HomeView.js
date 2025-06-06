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
                        <SongComponent src='/images/01 Jerry Marcoss - Mila mijoro (Official Video).mp3'/>
                        <SongComponent/>
                        <SongComponent/>
                        <SongComponent/>
                        <SongComponent/>
                    </ul>
                </section>
                <aside></aside>
            </main>
        </>
    )

    
}

export default HomeView;