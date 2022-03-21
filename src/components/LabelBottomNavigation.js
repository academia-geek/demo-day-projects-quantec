import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import "../styles/labelbottomnavbar.css"
import { NavLink } from 'react-router-dom';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <BottomNavigation sx={{ width: 375 }} value={value} onChange={handleChange} >
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
        label="Cuentas"
        value="Cuentas"
        icon={<img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647726334/proyecto-final/card-outline_mdesrn.svg" alt="" />}
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


