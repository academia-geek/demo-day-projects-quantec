

import styled from "styled-components"
import "@fontsource/montserrat"
import Home from '../components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';
import RegisterAccount from '../components/RegisterAccount';
import LoggedHome from '../components/LoggedHome';
import LoggedProfile from '../components/LoggedProfile';
import LoggedAims from '../components/LoggedAims';
import LoggedAccounts from '../components/LoggedAccounts';
import PlusAim from '../components/PlusAim';
import PlusAimType from '../components/PlusAimType';
import YourCustomAim from '../components/YourCustomAim';
import AddNewAim from '../components/AddNewAim';
import LabelBottomNavigation from '../components/LabelBottomNavigation';
import "../styles/labelbottomnavbar.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Spinner } from "react-bootstrap";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import DashboardRoutes from "./DashboardRoutes";


function App() {

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {            
            if(user?.uid){
                setIsLoggedIn(true)                
            }else{
                setIsLoggedIn(false)                
            }
            setChecking(false)
        })
    
    }, [])
    
    
    if(checking){
        return(
            <Spinner animation="grow" />
        )
    }

  return (
    <Document className="App">

      <Router>
        
        <Routes>
        <Route exact path="/home" element={
            <PublicRoute isAuth={isLoggedIn}>
                <Home />
            </PublicRoute>
          }/>          
          <Route exact path="/register" element={
            <PublicRoute isAuth={isLoggedIn}>
                <Register />
            </PublicRoute>
          }/>
          <Route exact path="/login" element={
            <PublicRoute isAuth={isLoggedIn}>
                <Login />
            </PublicRoute>
          }/>
          <Route exact path="/registerAcc" element={
            <PublicRoute isAuth={isLoggedIn}>
                <RegisterAccount />
            </PublicRoute>
          }/>
          <Route exact path='/*' element={
              <PrivateRoute isAuth={isLoggedIn}>
                <DashboardRoutes />
              </PrivateRoute> 
            }/>

          
          <Route exact path="/plusaim" element={<PlusAim />}></Route>
          <Route exact path="/yourcustomaim" element={<YourCustomAim />}></Route>
          <Route exact path="/plusaimtype" element={<PlusAimType />}></Route>         
          <Route exact path="/addnewaim" element={<AddNewAim />}></Route>
        </Routes>
      </Router>

    </Document>




  )
}
const Document = styled.div`

`
export default App;




