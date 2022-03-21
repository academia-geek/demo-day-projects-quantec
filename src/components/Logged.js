import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import LabelBottomNavigation from './LabelBottomNavigation'
import LoggedAims from './LoggedAims'

const Logged = () => {
    return (
        <div>

            <nav>
                <LabelBottomNavigation />
            </nav>


            <Routes>
                <Route path="/loggedaims" element={<LoggedAims />}></Route>
            </Routes>


        </div>
    )
}

export default Logged