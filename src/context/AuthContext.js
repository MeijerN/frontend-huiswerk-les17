import React, {createContext, useState} from 'react';
import {useHistory} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: "",
    });

    const history = useHistory();

    function userLogin(email) {
        toggleIsAuth({
            isAuth: true,
            user: {email},
        });
        console.log("Gebruiker is ingelogd!");
        history.push("/profile");
    }

    function userLogout(e) {
        e.preventDefault();
        toggleIsAuth({
            isAuth: false,
            user:"",
        });
        console.log("Gebruiker is uitgelogd");
        history.push("/");
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        loginFunction: userLogin,
        logoutFunction: userLogout,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export  default  AuthContextProvider;