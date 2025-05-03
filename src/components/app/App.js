import { BrowserRouter as Router, Routes, Route} from "react-router";
import ScrollToTop from "../scrollToTop/ScrollToTop";

import MainPage from "../pages/mainPage/MainPage"
import DoctorsPage from "../pages/doctorsPage/DoctorsPage"
import ClinicPage from "../pages/clinicPage/ClinicPage";
import PricePage from "../pages/pricePage/PricePage";
import LensesPage from "../pages/lensesPage/LensesPage";
import TherapyPage from "../pages/therapyPage/TherapyPage";
import DevicePage from "../pages/devicePage/DevicePage";
import DiagnosticPage from "../pages/diagnosticPage/DiagnosticPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="clinic/" element={<MainPage />} />
        <Route path="clinic/lenses" element={<LensesPage />} />
        <Route path="clinic/diagnostic" element={<DiagnosticPage />} />
        <Route path="clinic/therapy" element={<TherapyPage />} />
        <Route path="clinic/device" element={<DevicePage />} />
        <Route path="clinic/doctors" element={<DoctorsPage />} /> 
        <Route path="clinic/price" element={<PricePage />} />
      </Routes>
    </Router>
  )
}

export default App