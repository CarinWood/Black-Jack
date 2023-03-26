import Card02 from '../../components/card02/Card02';
import King from "../../components/king/King";
import Queen from "../../components/queen/Queen";
import Card03 from '../../components/card03/Card03';
import Ace from '../../components/ace/Ace.jsx'
import Card04 from '../../components/card04/Card04';

export const Deck = [
    {
        face: <Card04 suit={"diamonds"}/>,
        value: 1, 
        value2: 11,
    },
    {
        face: <Ace suit={"clubs"}/>,
        value: 1,
        value2: 11,
    },
    {
        face: <Card03 suit={"hearts"}/>,
        value: 3,
        value2: 3,
    },
    {
        face: <Ace suit={"spades"}/>,
        value: 1,
        value2: 11,
    },
    {
        face: <Card03 suit={"spades"}/>,
        value: 3, 
        value2: 3,
    },
    {
        face: <Card03 suit={"spades"}/>,
        value: 3,
        value2: 3,
    },
    
    {
        face: <Ace suit={"hearts"}/>,
        value: 1,
        value2: 11,
    },
    {
        face: <Ace suit={"spades"}/>,
        value: 1,
        value2: 11,
    },
    
]