import React from 'react';
import {GoogleLogin} from "react-google-login";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
const clientId = "241755766203-ds7jqv6v36klaq8c23senku2pg4c3b2t.apps.googleusercontent.com";
const LogIn = () => {
    const navigate = useNavigate();


    const onSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            localStorage.setItem('user', JSON.stringify({result, token}));
            navigate(`/`);
        } catch (err) {
            console.log(err)
        }
    }
    const onFailure = (error) => {
        console.log(error)
        toast.error("Google Sign In was unsuccessful. Try Again later")
    }
    return (
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText={"Login"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}

            />
        </>
    );
};

export default LogIn;