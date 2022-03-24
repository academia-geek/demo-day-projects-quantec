import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import "../styles/labelbottomnavbar.css"
import { NavLink, useLocation } from 'react-router-dom';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname.match("/loggedhome") || location.pathname.match("/loggedprofile") || location.pathname.match("/loggedaims") || location.pathname.match("/loggedacc")) {
    console.log("match");
    console.log(setTimeout(document.querySelector(".navbar"), 300));
    setTimeout(() => {
      document.querySelector(".navbar").style.cssText = "height: 70px; position: absolute; bottom: 0; background-color:#f6f5f7"
    }, 100);

  } else {
    setTimeout(() => {
      document.querySelector(".navbar").style.cssText = "display:none;"
    }, 100);
  }


  return (
    <BottomNavigation sx={{ width: 375 }} value={value} onChange={handleChange} style={{ zIndex: "-2" }} className="navbar" >
      <BottomNavigationAction
        component={NavLink}
        to="/loggedhome"
        label="Inicio"
        value="Inicio"
        icon={<img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647726334/proyecto-final/home-line_s4enf6.svg" alt="" />}
      />
      <BottomNavigationAction
        component={NavLink}
        to="/loggedaims"
        label="Objetivos"
        value="Objetivos"
        icon={<img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647726334/proyecto-final/bx-message-square-detail_rhvypq.svg" alt="" />}
      />
      <BottomNavigationAction
        component={NavLink}
        to="/loggedacc"
        label="Tips"
        value="Tips"
        icon={<img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648059986/proyecto-final/bombillo_pdz8jp.svg" width="24px" height="24px" alt="" />}
      />
      <BottomNavigationAction
        component={NavLink}
        to="/loggedprofile"
        label="Perfil"
        value="Perfil"
        icon={<img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647726334/proyecto-final/user-line_bw8zkm.svg" alt="" />}
      />




    </BottomNavigation>
  );
}


