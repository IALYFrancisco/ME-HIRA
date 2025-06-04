import ButtonComponent from '../components/ButtonComponent'
import LogoComponent from '../components/LogoComponent';
import SongComponent from '../components/Song/SongComponent';

function HomeView () {
    return (
        <body>
            <header>
                <nav>
                    <div class="logo-container">
                        <LogoComponent/>
                </div>
                    <div class="searchbar-container">
                        <input type="text" name="" id="" placeholder="Faite une recherche ..."/>
                    </div>
                    <div class="button-container">
                        <ButtonComponent text="Se connecter"/>
                    </div>
                </nav>
            </header>
            <main>
                <aside></aside>
                <section className='song-list'>
                    <ul>
                        <SongComponent/>
                    </ul>
                </section>
                <aside></aside>
            </main>
        </body>
    )
}

export default HomeView;