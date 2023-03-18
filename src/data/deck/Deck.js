import Card02 from '../../components/card02/Card02';
import King from "../../components/king/King";
import Queen from "../../components/queen/Queen";
import Card03 from '../../components/card03/Card03';
import Ace from '../../components/ace/Ace.jsx'

export const Deck = [
    {
        face: <Ace suit={"clubs"}/>,
        value: 1,
    },
    {
        face:  <King suit={"hearts"}/>,
        value: 10,
    },
    {
        face:  <King suit={"hearts"}/>,
        value: 10,
    },
    {
        face:  <Card03 suit={"spades"}/>,
        value: 3,
    },
    {
        face:  <Card03 suit={"spades"}/>,
        value: 3,
    },
    {
        face:  <Card03 suit={"spades"}/>,
        value: 3,
    },
    
    {
        face:  <Card02 suit={"diamonds"}/>,
        value: 2,
    },
    {
        face:  <Card03 suit={"hearts"}/>,
        value: 3,
    },
    
]