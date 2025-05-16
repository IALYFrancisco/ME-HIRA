import ButtonComponent from '../components/ButtonComponent'
import LogoComponent from '../components/LogoComponent';

function HomeView () {
    return (
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
    )
}

export default HomeView;