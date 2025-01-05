import React, { useEffect, useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavigationManu from '@/components/shared/navigationMenu/NavigationMenu'
import Header from '@/components/shared/header/Header'
import useBootstrapUtils from '@/hooks/useBootstrapUtils'
import SupportDetails from '@/components/supportDetails'

const RootLayout = () => {
    const pathName = useLocation().pathname
    useBootstrapUtils(pathName)

    const [user, setUser] = useState(null);

    useEffect(() => {
      fetchCurrentUser();
    }, []);
  

    const fetchCurrentUser = async () => {
        const token = localStorage.getItem('token'); // Retrieve the token from storage
        if (!token) {
          console.error('No token found. User not logged in.');
          return;
        }
      
        try {
          const response = await fetch('http://localhost:2002/api/user/current', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the header
            },
          });
      
          const userData = await response.json();
          console.log('User Data:', userData);
        } catch (err) {
          console.error('Failed to fetch current user:', err);
        }
      };
           

    return (
        <>
            <Header />
            <NavigationManu />
            <main className="nxl-container">
                <div className="nxl-content">
                    <Outlet />
                </div>
            </main>
            <SupportDetails />
        </>
    )
}

export default RootLayout