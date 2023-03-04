import Card02 from '../../components/card02/Card02';
import King from "../../components/king/King";
import Queen from "../../components/queen/Queen";
import Card03 from '../../components/card03/Card03';

export const Deck = [
    {
        face: <Card03 suit={"hearts"}/>,
        value: 3,
    },
    {
        face:  <Card02 suit={"hearts"}/>,
        value: 2,
    },
    {
        face:  <Card03 suit={"hearts"}/>,
        value: 3,
    },
    {
        face:  <Card03 suit={"spades"}/>,
        value: 3,
    },
    {
        face:  <Queen suit={"spades"}/>,
        value: 10,
    },
    {
        face:  <King suit={"spades"}/>,
        value: 10,
    },
    
    {
        face:  <King suit={"diamonds"}/>,
        value: 10,
    },
    {
        face:  <King suit={"hearts"}/>,
        value: 10,
    },
    
]