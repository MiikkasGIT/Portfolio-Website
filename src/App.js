import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from "react"
import About from "./pages/About/About.js";
import Home from "./pages/Home/Home.js";
import Kontakt from "./pages/Kontakt/Kontakt.js";
import Error from "./pages/404/404.js";
import Impressum from './pages/impressum/Impressum.js';
import Projekte from "./pages/work/work"
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }
    ,1000)
  },[]
  )


  return (
<>
    {
      loading?
      <div className='Loader'>
      <ClipLoader color="#04AA6D" loading={loading} size={150} />
      </div>

      :



    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="Kontakt" element={<Kontakt/>} />
        <Route path="projekte" element={<Projekte/>} />
        <Route path="Impressum" element={<Impressum/>} />
        <Route path="instagram" />

        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
    }
    </>
  );
}

export default App;
