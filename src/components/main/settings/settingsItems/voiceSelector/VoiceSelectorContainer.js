import {connect} from "react-redux";
import VoiceSelector from "./VoiceSelector";
import {setCurrentVoiceAC} from "../../../../../store/reducers/settings";


const mapStateToProps = (state) => {
    return {
        currentVoice: state.settings.currentVoice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentVoice: (newValue) => dispatch(setCurrentVoiceAC(newValue))
    }
}

const VoiceSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(VoiceSelector)

export default VoiceSelectorContainer