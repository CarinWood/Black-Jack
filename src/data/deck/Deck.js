import Card02 from '../../components/card02/Card02';
import King from "../../components/king/King";
import Queen from "../../components/queen/Queen";

export const Deck = [
    {
        face: <Queen suit={"diamonds"}/>,
        value: 10,
    },
    {
        face:  <Queen suit={"clubs"}/>,
        value: 10,
    },
    {
        face:  <Queen suit={"hearts"}/>,
        value: 10,
    },
    {
        face:  <Card02 suit={"hearts"}/>,
        value: 2,
    },
    {
        face:  <Card02 suit={"hearts"}/>,
        value: 2,
    },
    {
        face:  <King suit={"spades"}/>,
        value: 10,
    },
    
]