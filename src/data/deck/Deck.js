import Card02 from '../../components/card02/Card02';
import King from "../../components/king/King";
import Queen from "../../components/queen/Queen";
import Card03 from '../../components/card03/Card03';
import Ace from '../../components/ace/Ace.jsx'

export const Deck = [
    {
        face: <Ace suit={"spades"}/>,
        value: 1, 
        value2: 11,
    },
    {
        face:  <Card02 suit={"hearts"}/>,
        value: 2,
        value2: 2,
    },
    {
        face:  <Card03 suit={"hearts"}/>,
        value: 3,
        value2: 3,
    },
    {
        face:  <King suit={"spades"}/>,
        value: 10,
        value2: 10,
    },
    {
        face:  <Card03 suit={"spades"}/>,
        value: 3, 
        value2: 3,
    },
    {
        face:  <Ace suit={"spades"}/>,
        value: 1,
        value2: 11,
    },
    
    {
        face:  <Card02 suit={"diamonds"}/>,
        value: 2,
        value2: 2,
    },
    {
        face:  <Card03 suit={"hearts"}/>,
        value: 3,
        value2: 3,
    },
    
]