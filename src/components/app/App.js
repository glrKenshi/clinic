import { BrowserRouter as Router, Routes, Route} from "react-router";
import ScrollToTop from "../scrollToTop/ScrollToTop";

import MainPage from "../pages/mainPage/MainPage"
import DoctorsPage from "../pages/doctorsPage/DoctorsPage"
import ClinicPage from "../pages/clinicPage/ClinicPage";
import PricePage from "../pages/pricePage/PricePage";
import LensesPage from "../pages/servicePages/LensesPage";
import TherapyPage from "../pages/servicePages/TherapyPage";
import DevicePage from "../pages/servicePages/DevicePage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lenses" element={<LensesPage />} />
        <Route path="/clinic" element={<ClinicPage />} />
        <Route path="/therapy" element={<TherapyPage />} />
        <Route path="/device" element={<DevicePage />} />
        <Route path="/doctors" element={<DoctorsPage />} /> 
        <Route path="/price" element={<PricePage />} />
      </Routes>
    </Router>
  )
}

export default App