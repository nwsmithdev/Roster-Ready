import styles from './IntroSection.module.css';

function IntroSection() {
    return (
        <section className={styles.introSection}>
            <p className={styles.introEyebrow}>Student Roster Validation</p>
            <h1 className={styles.introHeader}>Catch roster errors before they create more work.</h1>
            <p className={styles.introDescription}>
                Upload a CSV roster to check for missing information, formatting problems, duplicate records, and other common data-quality issues.
            </p>
            <p className={styles.privacyMessage}>Your file is processed entirely in your browser. It is not uploaded or stored on a server.</p>
        </section>
    );
}

export default IntroSection;