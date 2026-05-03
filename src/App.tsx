import { Route, Routes } from "react-router-dom";
import WebHome from "./Pages/WebHome";
import Privacy from "./Pages/WebPrivacy";
import Home from "./Pages/Home";
// lazy-load тяжёлых секций

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="web" element={<WebHome />} />
      <Route path="web/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
