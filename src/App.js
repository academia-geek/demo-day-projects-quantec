
import './App.css';
import styled from "styled-components"
import "@fontsource/montserrat"
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import RegisterAccount from './components/RegisterAccount';
import LoggedHome from './components/LoggedHome';
import LoggedProfile from './components/LoggedProfile';
import LoggedAims from './components/LoggedAims';
import LoggedAccounts from './components/LoggedAccounts';
import PlusAim from './components/PlusAim';
import PlusAimType from './components/PlusAimType';
import YourCustomAim from './components/YourCustomAim';
import AddNewAim from './components/AddNewAim';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import "./styles/labelbottomnavbar.css"
function App() {


  return (
    <Document className="App">

      <Router>
        <LabelBottomNavigation />
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/plusaim" element={<PlusAim />}></Route>
          <Route exact path="/yourcustomaim" element={<YourCustomAim />}></Route>
          <Route exact path="/plusaimtype" element={<PlusAimType />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/registerAcc" element={<RegisterAccount />}></Route>
          <Route exact path="/loggedhome" element={<LoggedHome />}></Route>
          <Route exact path="/loggedprofile" element={<LoggedProfile />}></Route>
          <Route exact path="/loggedaims" element={<LoggedAims />}></Route>
          <Route exact path="/loggedacc" element={<LoggedAccounts />}></Route>
          <Route exact path="/addnewaim" element={<AddNewAim />}></Route>
        </Routes>
      </Router>

    </Document>




  )
}
const Document = styled.div`

`
export default App;




