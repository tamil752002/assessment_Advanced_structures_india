import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import HomePage from "./components/HomePage";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:itemname" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;