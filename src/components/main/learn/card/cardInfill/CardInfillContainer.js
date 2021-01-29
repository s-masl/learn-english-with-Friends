import {connect} from "react-redux";
import CardInfill from "./CardInfill"
import {showTranslateAC} from "../../../../../store/reducers/learn";


const mapStateToProps = (state) => {
    return {
        title: state.learn.title,
        word: state.learn.currentEpisode[0][0],
        wordsLost: state.learn.currentEpisode.length,
        wordsLength: state.learn.currentEpisodeLength,
        transcription: state.learn.currentEpisode[0][1],
        translate: state.learn.currentEpisode[0][2],
        isTranslateDisplayed: state.learn.isTranslateDisplayed,
        currentVoiceId: state.settings.currentVoice.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showTranslate: () => dispatch(showTranslateAC()),
    }
}

const CardInfillContainer = connect(mapStateToProps, mapDispatchToProps)(CardInfill)

export default CardInfillContainer;