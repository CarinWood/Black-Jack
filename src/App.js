import GameTable from "./pages/gameTable/GameTable";
import StartPage from "./pages/startPage/StartPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<StartPage />}/>
    <Route path="/play" element={<GameTable />}/>
  
    </Routes>
    </>
  );
}

export default App;
