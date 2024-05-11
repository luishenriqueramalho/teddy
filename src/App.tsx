import React from "react";
import Login from "./modules/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./modules/Dashboard";
import HomeView from "./components/HomeView";
import { StoreProvider } from "./mobx/store";

const App: React.FC = () => {
  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home-view" element={<HomeView />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
};

export default App;
