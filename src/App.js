
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
import Password from './components/Password';
import Terms from './components/Terms';
import WelcomeAccount from './components/WelcomeAccount';
import AccDesc from './components/AccDesc';
import AddNewAcc from './components/AddNewAcc';
import LoggedHome from './components/LoggedHome';
import LoggedProfile from './components/LoggedProfile';
import LoggedAims from './components/LoggedAims';
import LoggedAccounts from './components/LoggedAccounts';
import Logged from './components/Logged';
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
          <Route path="/password" element={<Password />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/welcomeacc" element={<WelcomeAccount />}></Route>
          <Route path="/accdesc" element={<AccDesc />}></Route>
          <Route path="/addnewacc" element={<AddNewAcc />}></Route>
          <Route path="/loggedhome" element={<LoggedHome />}></Route>
          <Route path="/loggedprofile" element={<LoggedProfile />}></Route>
          <Route path="/loggedaims" element={<LoggedAims />}></Route>
          <Route path="/loggedacc" element={<LoggedAccounts />}></Route>
          <Route path="/logged" element={<Logged />}></Route>
        </Routes>
      </Router>

    </Document>




  )
}
const Document = styled.div`

`
export default App;




