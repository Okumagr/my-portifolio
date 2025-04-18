import styles from './Navbar.module.css';

export function Navbar() {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["navbar_logo"]}>Gabriel Renan</div>
            <ul className={styles["navbar_links"]}>
                <li className={styles["navbar_icon"]}>
                    <img src="/src/assets/Icons/linkedinIcon.svg" alt="LinkedIn" className={styles["icon"]} />
                </li>
                <li className={styles["navbar_icon"]}>
                    <img src="/src/assets/Icons/githubIcon.svg" alt="GitHub" className={styles["icon"]} />
                </li>
                <li className={styles["navbar_link"]}>Home</li>
                <li className={styles["navbar_link"]}>About</li>
                <li className={styles["navbar_link"]}>Contact</li>
                <button className={styles["navbar_link"]}>Let's Connect</button>
            </ul>
        </div>
    );
}