import ButtonComponent from '../components/ButtonComponent'

function HomeView () {
    return (
        <header>
            <nav>
            <div class="logo-container">
                <h1>Logo</h1>
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