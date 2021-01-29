import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import styles from "./GettingStarted.module.css"


function GettingStarted() {
    return <div className={styles.gettingStarted}>
        <div className={styles.header}>Learn english with Friends</div>
        <div className={styles.description}>
            <div>This app will help you learn English while watching Friends.</div>
            <div>The app uses the flashcard learning method.</div>
        </div>
        <div className={styles.howItWorks}>
            <div className={styles.howItWorksHeader}>How it works:</div>
            <ul>
                <li>Click <GiHamburgerMenu size={"0.7em"}/> </li>
                <li>Select episode</li>
                <li>Hold the card and...</li>
            </ul>
        </div>
        <div className={styles.arrows}>
            <div className={styles.leftArrow}>
                <div className={styles.instruction}>swipe to the left if you already know the word</div>
                <div className={styles.arrow}><BsArrowLeft size={"5em"}/></div>
            </div>
            <div className={styles.rightArrow}>
                <div className={styles.instruction}>swipe to the right if you don't know the word</div>
                <div className={styles.arrow}><BsArrowRight size={"5em"}/></div>
            </div>
        </div>
    </div>
}

export default GettingStarted;
