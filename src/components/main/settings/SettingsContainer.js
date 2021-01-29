import {connect} from "react-redux";
import Settings from "./Settings"
import {setCurrentVoiceAC} from "../../../store/reducers/settings";


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentVoice: (id) => dispatch(setCurrentVoiceAC(id))
    }
}

const SettingsContainer = connect(null, mapDispatchToProps)(Settings)


export default SettingsContainer