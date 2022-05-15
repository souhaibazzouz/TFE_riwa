import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import News from "./pages/News/News";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import Login from "./pages/Login/Login";
import Info from "./pages/Info/Info";
import Home from './pages/Home/Home';
import Elite from "./pages/Elite/Elite";
import Section from "./pages/Section/Section";
import Entrainement from "./pages/Entrainement/Entrainement";
import Comite from "./pages/Comite/Comite";
import Coordinateur from "./pages/Coordinateur/Coordinateur";
import Officiels from "./pages/Officiels/Officiels";
import Competitions from "./pages/Competitions/Competitions";
import Organisations from "./pages/Organisations/Organisations";
import Resultats from "./pages/Resultats/Resultats";
import Bilan from "./pages/Bilan/Bilan";
import RecordClub from "./pages/RecordClub/RecordClub";
import Stages from "./pages/Stages/Stages";
import Boutique from "./pages/Boutique/Boutique";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/elites" element={<Elite />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetails" element={<NewsDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/infos" element={<Info />} />
          <Route path="/sections" element={<Section />} />
          <Route path="/entrainement" element={<Entrainement />} />
          <Route path="/comite" element={<Comite />} />
          <Route path="/coordinateur" element={<Coordinateur />} />
          <Route path="/officiels" element={<Officiels />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/organisations" element={<Organisations />} />
          <Route path="/resultats" element={<Resultats />} />
          <Route path="/bilan" element={<Bilan />} />
          <Route path="/rc" element={<RecordClub />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
