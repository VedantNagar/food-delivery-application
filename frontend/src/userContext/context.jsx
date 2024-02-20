import axios from "axios";

import { createContext, useEffect, useRef, useState } from "react";
import { profileUrl } from "../../urls/userUrl";

export const userContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const servicesRef = useRef(null);
    useEffect(() => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        if(token){
            setIsLogin(true);
        }
    },[])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(profileUrl);
                setUser(response.data);
                // console.log(response.data);
            } catch (error) {
                // Handle errors, e.g., if the user is not authenticated
                setIsLogin(false)
                setUser(null)
                console.error("Error fetching user profile:", error);
            }
        };

      

        
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        

        if (isLogin && token) {
            fetchData();
        }
    }, [isLogin]);

    const logOut = () => {
        // Clear the authentication token
        document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Update the login state
        setIsLogin(false);
        // Reset the user state
        setUser(null);
        
    };

    return (
        <userContext.Provider
            value={{
                user,
                setUser,
                isLogin,
                setIsLogin,
                logOut,
                isLoading,
                setIsLoading,
                servicesRef,

            }}
        >
            {children}
        </userContext.Provider>
    );
}
