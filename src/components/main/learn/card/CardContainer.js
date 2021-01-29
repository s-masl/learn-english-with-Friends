import {connect} from "react-redux";
import Card from "./Card";

const mapStateToProps = (state) => {
    return {
        title: state.learn.title,
        cardsLost: state.learn.currentEpisode.length
    }
}

const CardContainer = connect(mapStateToProps)(Card)

export default CardContainer;