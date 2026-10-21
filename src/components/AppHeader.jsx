import styles from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.brand}>
                    <span className={styles.logo} aria-hidden="true">✓</span>
                    <span className={styles.brandName}>RosterReady</span>
                </div>

                <button className={styles.helpButton} type="button">Help</button>
            </div>
        </header>
    );
}

export default AppHeader;