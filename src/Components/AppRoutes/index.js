import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import IEEE from "../../Pages/IEEE";
import NSS from "../../Pages/NSS";
import ECO from "../../Pages/ECO";
import PLMT from "../../Pages/Placements";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/nss" element={<NSS />}></Route>
      <Route path="/ieee" element={<IEEE />}></Route>
      <Route path="/eco" element={<ECO />}></Route>
      <Route path="/placement" element={<PLMT />}></Route>
    </Routes>
  );
}
export default AppRoutes;
