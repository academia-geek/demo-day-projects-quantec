
import './App.css';
import styled from "styled-components"
import "@fontsource/montserrat"
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
function App() {
  return (
    <Document className="App">

      <Router>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>


        </Routes>
      </Router>

    </Document>




  )
}
const Document = styled.div`

`
export default App;




