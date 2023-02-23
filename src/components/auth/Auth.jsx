import React, {useEffect, useState} from 'react';
import Login from "./LogIn.jsx";
import LogOut from "./LogOut.jsx";
import {Avatar, Button, Grid, Paper, Typography} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from "./Input";
import {gapi} from "gapi-script";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {fetchRegister, reset} from "../../redux/auth/authSlice.js";

const clientId = "241755766203-ds7jqv6v36klaq8c23senku2pg4c3b2t.apps.googleusercontent.com"
const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, loading, errors, isSuccess, message} = useSelector((state) => state.auth);
    const
        [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    const {password, confirmPassword} = formData;
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };
        gapi.load("client:auth2", start)

    }, []);
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    //?switchMode
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error(`Passwords do not match`)
        } else {
            dispatch(fetchRegister(formData));
        }


    }
    //?useEffect
    useEffect(() => {
        if (errors) {
            toast.error(message);
        }
        if(isSuccess || user){
            navigate(`/`)
        }
        dispatch(reset())

    }, [user, loading, errors, isSuccess, message, dispatch, navigate])
    //?handleChange
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    return (
        <>
            <div className="w-full h-screen bg-gradient-to-tl from-blue-300 to green-500 relative">
                <img src={"/img/reg2.jpg"} alt={"bg"}
                     className={" w-full h-full object-cover absolute mix-blend-overlay -z-50 bg-indigo-500 "}/>
                <Paper elevation={3}
                       className={"w-[450px] h-[auto] mx-auto mt-20 bg-amber-50 rounded-xl shadow-amber-800 border-2"}>
                    <Avatar style={{background: "#F50057", margin: " 5px auto"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant={"h5"}
                                className={" text-center "}>{isSignup ? "Sign In" : "Sign In"}</Typography>
                    <form onSubmit={handleSubmit} className={"m-auto w-4/5"}>
                        <Grid container spacing={3}>
                            {isSignup && (
                                <>
                                    <Input name={"firstName"} label={"First Name"} handleChange={handleChange}
                                           autoFocus half classname={""}/>


                                    <Input name={"lastName"} label={"Last Name"}
                                           handleChange={handleChange}
                                           half/>
                                </>
                            )}
                            <Input name={"email"} label={"Email "} handleChange={handleChange} type={"email"}/>
                            <Input name={"password"} label={"Password"} handleChange={handleChange}
                                   type={showPassword ? "text" : "password"}
                                   handleShowPassword={handleShowPassword}/>
                            {isSignup &&
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}
                                       type="password"/>}
                        </Grid>
                        {/*/googleAccount*/}
                        <Grid className={"flex justify-between"}>
                            <Login/>
                            <LogOut/>
                        </Grid>

                        <Button type={"submit"} fullWidth variant={"contained"} color={"primary"} className={"top-1"}>
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Button onClick={switchMode} className={" -top-0 left-[20%] "}>
                                    {isSignup ? "Already have an account ? Sign In " : "Don't have an account ? Sign Up"}
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>

            </div>
        </>
    );
};

export default Auth;