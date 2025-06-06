import Styles from './SongComponent.module.css'

function SongComponent({src}){
    return(
        <li className={Styles.song}>
            <audio src={src}></audio>
            <img src='/images/logo-de-me-hira.png' alt='Logo de ME-HIRA' className={Styles.img_logo} />
            <section className={Styles.song_info}>
                <section className={Styles.left}>
                    <h4 className={Styles.title}>Sambatra</h4>
                    <h6 className={Styles.author}>Rolf</h6>
                </section>
                <section className={Styles.right}>
                    <div className={Styles.play_container}>
                        <img src='/images/play.png' className={Styles.play} alt='icon play de me-hira'/>
                    </div>
                    <img src='/images/options.png' className={Styles.options} alt='icon opttions de me-hira'/>
                </section>
            </section>
        </li>
    )
}

export default SongComponent