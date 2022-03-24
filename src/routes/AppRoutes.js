import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './App.css';
import styled from "styled-components"
import "@fontsource/montserrat"
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Aim from './components/Aim';
import Debts from './components/Debts';
import SaveMoney from './components/SaveMoney';
import Register from './components/Register';
import Login from './components/Login';
import RegisterAccount from './components/RegisterAccount';
import Terms from './components/Terms';
import WelcomeAccount from './components/WelcomeAccount';
import AccDesc from './components/AccDesc';
import AddNewAcc from './components/AddNewAcc';
import LoggedHome from './components/LoggedHome';
import LoggedProfile from './components/LoggedProfile';
import LoggedAims from './components/LoggedAims';
import LoggedAccounts from './components/LoggedAccounts';
import PlusAim from './components/PlusAim';
import PlusAimType from './components/PlusAimType';
import YourCustomAim from './components/YourCustomAim';
import AddNewAim from './components/AddNewAim';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
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
          <Route exact path="/" element={
            <PublicRoute isAuth={isLoggedIn}>
                <Home />
            </PublicRoute>
          }/>
          <Route exact path="/welcome" element={
            <PublicRoute isAuth={isLoggedIn}>
                <Welcome />
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
          <Route exact path="/plusaim" element={<PlusAim />}/>
          <Route exact path="/yourcustomaim" element={<YourCustomAim />}/>
          <Route exact path="/plusaimtype" element={<PlusAimType />}/>
          <Route exact path="/aim" element={<Aim />}/>
          <Route exact path="/debts" element={<Debts />}/>
          <Route exact path="/savemoney" element={<SaveMoney />}/>
          
          <Route exact path="/terms" element={<Terms />}/>
          <Route exact path="/welcomeacc" element={<WelcomeAccount />}/>
          <Route exact path="/accdesc" element={<AccDesc />}/>
          <Route exact path="/addnewacc" element={<AddNewAcc />}/>
          <Route exact path="/loggedhome" element={<LoggedHome />}/>
          <Route exact path="/loggedprofile" element={<LoggedProfile />}/>
          <Route exact path="/loggedacc" element={<LoggedAims />}/>
          <Route exact path="/loggedaims" element={<LoggedAccounts />}/>
          <Route exact path="/addnewaim" element={<AddNewAim />}/>
        </Routes>
      </Router>

    </Document>

  )
}

export default AppRoutes