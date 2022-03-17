
import './App.css';
import styled from "styled-components"
import "@fontsource/montserrat"
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Aim from './components/Aim';
import Debts from './components/Debts';
import Invest from './components/Invest';
import SaveMoney from './components/SaveMoney';
import Register from './components/Register';
import Login from './components/Login';
import RegisterAccount from './components/RegisterAccount';
function App() {
  return (
    <Document className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/aim" element={<Aim />}></Route>
          <Route path="/debts" element={<Debts />}></Route>
          <Route path="/savemoney" element={<SaveMoney />}></Route>
          <Route path="/invest" element={<Invest />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registerAcc" element={<RegisterAccount />}></Route>


        </Routes>
      </Router>

    </Document>




  )
}
const Document = styled.div`

`
export default App;




