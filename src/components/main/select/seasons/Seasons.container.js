import {connect} from "react-redux";
import Seasons from "./Seasons";
import {setCurrentSeasonAC} from "../../../../store/reducers/learn";


const mapDispatchToProps = (dispatch) => {
    return {setCurrentSeason: (number) => dispatch(setCurrentSeasonAC(number))}
}

const SeasonsContainer = connect(null, mapDispatchToProps)(Seasons)

export default SeasonsContainer;