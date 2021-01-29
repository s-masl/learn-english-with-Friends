import GettingStarted from "./gettingStarted/GettingStarted";
import CardInfillContainer from "./cardInfill/CardInfillContainer";
import IfTheCardsAreOut from "./ifTheCardsAreOut/IfTheCardsAreOut";

function Card(props) {
    if (props.title === "Empty") {
        return <GettingStarted/>
    } else if (props.cardsLost === 0) {
        return <IfTheCardsAreOut/>
    } else return <CardInfillContainer/>
}

export default Card;
