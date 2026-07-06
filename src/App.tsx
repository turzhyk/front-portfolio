import { Route, Routes } from "react-router-dom";
import WebHome from "./Pages/WebHome";
import Privacy from "./Pages/WebPrivacy";
import Home from "./Pages/Home";
import NetHome from "./Pages/NetHome";
import Warsztat from "./Examples/Warsztat/Warsztat";
import Masaz from "./Examples/Masaz/Masaz";
// lazy-load тяжёлых секций

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="web" element={<WebHome />} />
      <Route path="web/privacy" element={<Privacy />} />
      <Route path="net" element={<NetHome/>}/>
      <Route path="demo/warsztat" element={<Warsztat/>}/>
      <Route path="demo/masaz" element={<Masaz/>}/>
    </Routes>
  );
}

export default App;
