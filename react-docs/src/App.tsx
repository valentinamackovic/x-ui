import React from "react";
import "./shared.css";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalPage from "./pages/ModalPage";
import AccordionPage from "./pages/AccordionPage";
import { SelectPage } from "./pages/SelectPage";
import MenuPage from "./pages/MenuPage";
import { MultiselectPage } from "./pages/MultiselectPage";
import OverviewPage from "./pages/OverviewPage";

function App() {
  return (
    <BrowserRouter>
      <title className="title">X UI</title>
      <div className="main-page-wrapper">
        <Sidebar />
        <div className="main-page-content">
          <Routes>
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/select" element={<SelectPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/multiselect" element={<MultiselectPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
