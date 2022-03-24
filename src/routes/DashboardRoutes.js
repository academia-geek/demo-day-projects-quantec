import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import LoggedAccounts from '../components/LoggedAccounts'
import LoggedHome from '../components/LoggedHome'
import LoggedProfile from '../components/LoggedProfile'

const DashboardRoutes = () => {
  return (
    <>
        <div>
        <LabelBottomNavigation />
            <Routes>
                <Route exact path="/loggedhome" element={<LoggedHome />}/>
                <Route exact path="/loggedprofile" element={<LoggedProfile />}></Route>
                <Route exact path="/loggedacc" element={<LoggedAccounts />}></Route>
                <Route path='*' element={<Navigate to='/loggedhome' />} />
            </Routes>
        </div>
    </>
  )
}

export default DashboardRoutes