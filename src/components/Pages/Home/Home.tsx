import { Typewriter } from 'react-simple-typewriter'
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles["home_container"]}>
            <div className={styles['text_area']}>
                <h1>Welcome to My Portfolio</h1>
                <h2>I am Gabriel Renan,</h2>
                <h2>
                    <Typewriter
                        words={['Full Stack Developer', 'UI/UX Design']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
            </div>
            <div className={styles['image_area']}>
                <img src='./src/assets/images/vagabond_logo.png' alt="Imagem do meu mangá (Desenho) favorito (Vagabond)" />
            </div>
        </div>
    )
}