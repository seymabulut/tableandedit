import { Route, Routes } from "react-router-dom";
import Table from "./pages/Table/table";
import Edit from "./pages/Edit/edit";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
}

export default App;
