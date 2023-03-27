import GameTable from "./pages/gameTable/GameTable";
import StartPage from "./pages/startPage/StartPage";
import { Routes, Route } from "react-router-dom";
import Faq from "./pages/faqPage/Faq";
import './index.css'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<StartPage />}/>
    <Route path="/play" element={<GameTable />}/>
    <Route path="/faq" element={<Faq/>}/>
  
    </Routes>
    </>
  );
}

export default App;
