import {useSpeechSynthesis} from "react-speech-kit";
import {AiOutlineSound} from "react-icons/ai";
import Button from '@material-ui/core/Button';
import styles from "./CardInfill.module.css";


function CardInfill(props) {
    const {speak} = useSpeechSynthesis();
    const voice = (useSpeechSynthesis().voices[props.currentVoiceId]);
    return <div className={styles.card}>

        <div className={styles.titleBox}>
            <div>{props.title}</div>
            <div>{props.wordsLost}/{props.wordsLength}</div>
        </div>

        <div className={styles.wordBox}>
            <div>
                <div>{props.word}</div>
                <div>{props.transcription}</div>
            </div>
            <div>
                <Button onClick={() => speak({text: props.word, voice: voice})}><AiOutlineSound
                    size={"30px"}/></Button>
            </div>
        </div>

        <div className={styles.translateBox}>
            <div className={styles.translate} style={{opacity: props.isTranslateDisplayed}}>
                {props.translate}
            </div>

            <div className={styles.translateButtonBox} style={{opacity: Math.abs(props.isTranslateDisplayed - 1)}}>
                <Button onClick={props.showTranslate} className={styles.translateButton}>
                    <div>Translate</div>
                </Button>
            </div>
        </div>
    </div>
}

export default CardInfill;
