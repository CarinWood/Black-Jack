import Card02 from './components/card02/Card02';



function App() {
  return (
    <div className='app'>
      <Card02 suit={"diamonds"}/>
      <Card02 suit={"clubs"}/>
      <Card02 suit={"hearts"}/>
      <Card02 suit={"spades"}/>
    </div>
  );
}

export default App;
