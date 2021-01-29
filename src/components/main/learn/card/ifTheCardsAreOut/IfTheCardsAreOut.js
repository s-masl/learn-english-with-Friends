import styles from "./IfTheCardsAreOut.module.css"


function IfTheCardsAreOut() {
    return <div className={styles.ifTheCardsAreOut}>
        <div className={styles.header}>Congratulations</div>
        <div className={styles.description}>
            <div>You learned all unknown words from episode.</div>
            <div>Watch the episode and come for new words.</div>
        </div>
    </div>
}

export default IfTheCardsAreOut;
