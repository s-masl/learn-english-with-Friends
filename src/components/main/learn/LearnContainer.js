import {connect} from "react-redux";
import Learn from "./Learn";
import {markKnowAC, markUnknownAC} from "../../../store/reducers/learn";


const mapDispatchToProps = (dispatch) => {
    return {
        markKnow: () => dispatch(markKnowAC()),
        markUnknown: () => dispatch(markUnknownAC()),
    }
}

const LearnContainer = connect(null, mapDispatchToProps)(Learn)

export default LearnContainer;