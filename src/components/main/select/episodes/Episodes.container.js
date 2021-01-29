import {connect} from "react-redux";
import Episodes from "./Episodes";
import {setCurrentEpisodeAC} from "../../../../store/reducers/learn";


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentEpisode: (number) => dispatch(setCurrentEpisodeAC(number))
    }
}

const EpisodesContainer = connect(null, mapDispatchToProps)(Episodes);

export default EpisodesContainer;