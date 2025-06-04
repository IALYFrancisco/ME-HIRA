import Styles from './SongComponent.module.css'

function SongComponent(){
    return(
        <li className={Styles.song}>
            <img src='/images/logo-de-me-hira.png' alt='Logo de ME-HIRA' className={Styles.img_logo} />
            <section className={Styles.song_info}>
                <section className={Styles.left}>
                    <h4 className={Styles.title}>Sambatra</h4>
                    <h6 className={Styles.author}>Rolf</h6>
                </section>
                <section className={Styles.right}>
                    <div className={Styles.play_container}>
                        <img src='/images/heart.png' className={Styles.play}/>
                    </div>
                    <img src='/images/france.png' className={Styles.options}/>
                </section>
            </section>
        </li>
    )
}

export default SongComponent