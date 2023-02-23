import React from 'react';
import {GoogleLogout} from "react-google-login";
const clientId = "406499424953-kdubc7qch2v7v1oglk3kkij7vf6l0u8l.apps.googleusercontent.com";
const LogOut = () => {

        const onSuccess = () => {
            console.log("Log out Successfull!")
        }
    return (
        <>
           <GoogleLogout
               clientId={clientId}
               buttonText={"logout"}
               onLogoutSuccess={onSuccess}

           />
        </>
    );
};

export default LogOut;