import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Read from "./components/pages/Read";
import Header from "./components/partials/Header";
import Add from "./components/pages/Add";
import Single from "./components/pages/Single";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_students" element={<Read />} />
        <Route path="/add_student" element={<Add />} />
        <Route path="/single_edit/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
