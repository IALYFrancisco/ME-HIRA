import { useRef, useContext } from 'react'
import Styles from './SongComponent.module.css'
import { SongContext } from '../../contexts/SongContext';

function SongComponent({src, title, author}) {
    const songRef = useRef(null);
    const { play } = useContext(SongContext);

    const togglePlay = () => {
        if (songRef.current) {
            play(songRef.current);
        }
    };

    return (
        <li className={Styles.song}>
            <audio src={src} ref={songRef}></audio>
            <img src='/images/logo-de-me-hira.png' alt='Logo de ME-HIRA' className={Styles.img_logo} />
            <section className={Styles.song_info}>
                <section className={Styles.left}>
                    <h4 className={Styles.title}>{title}</h4>
                    <h6 className={Styles.author}>{author}</h6>
                </section>
                <section className={Styles.right}>
                    <div className={Styles.play_container} onClick={togglePlay}>
                        <img src='/images/play.png' className={Styles.play} alt='icon play de me-hira'/>
                    </div>
                    <div className={Styles.play_container}>
                        <img src='/images/options.png' className={Styles.options} alt='icon options de me-hira'/>
                    </div>
                </section>
            </section>
        </li>
    );
}

export default SongComponent;
