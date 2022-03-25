import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddNewAim from '../components/AddNewAim'
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import LoggedAccounts from '../components/LoggedAccounts'
import LoggedAims from '../components/LoggedAims'
import LoggedHome from '../components/LoggedHome'
import LoggedProfile from '../components/LoggedProfile'
import PlusAim from '../components/PlusAim'
import PlusAimType from '../components/PlusAimType'
import YourCustomAim from '../components/YourCustomAim'

const DashboardRoutes = () => {
  return (
    <>
        <div>
        <LabelBottomNavigation />
            <Routes>
                <Route exact path="/loggedhome" element={<LoggedHome />}/>
                <Route exact path="/loggedprofile" element={<LoggedProfile />}/>
                <Route exact path="/loggedacc" element={<LoggedAccounts />}/> 
                <Route exact path='/loggedaims' element={<LoggedAims/>}/>               
                <Route exact path="/plusaim" element={<PlusAim />}/>
                <Route exact path="/yourcustomaim" element={<YourCustomAim />}/>
                <Route exact path="/plusaimtype" element={<PlusAimType />}/>         
                <Route exact path="/addnewaim" element={<AddNewAim />}/>
                <Route path='*' element={<Navigate to='/loggedhome' />} />
            </Routes>
        </div>
    </>
  )
}

export default DashboardRoutes