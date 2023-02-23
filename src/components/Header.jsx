import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import decode from "jwt-decode";
import {Toolbar, Avatar, Typography, Button} from "@material-ui/core";
import {useLocation, useNavigate} from "react-router";



const Header = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler ();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    //?logout
    const logoutHandler = () => {
        //dispatch({type:LOGOUT});
        navigate(`/`);
        setUser(null);

    }
    return (
        <>
            <div className=" flex w-full  h-16 items-center justify-between  bg-[#3F51B5]">
                <div className={"flex   ml-4  w-[120px] h-10 bg-white rounded-lg items-center justify-center"}>
                    <Link to={"/"}>
                        <span className={"text-blue-600 text-sx  font-bold tracking-wider "}>ANNASOCIAL</span>
                    </Link>
                </div>

                <Toolbar className={"flex w-96 justify-between items-center flex gap-50 relative -left-30"}>
                    {user?.result ? (<div>
                        <Typography className={"text-xl text-white left-1 absolute top-7"}>
                            {user?.result.name}
                        </Typography>
                        <Avatar className={"right-20 top-5"}
                                src={user?.result.imgUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Button  component={Link} to={`/auth`} variant="contained" color={"secondary"} className={"left-60 -top-6"}
                                 onClick={logoutHandler}>Logout</Button>
                    </div>) : (<Button variant="contained" component={Link} to={`/auth`}
                                       className={"left-60 -top-0.5 text-white"}>Sign In</Button>)}
                </Toolbar>
            </div>
        </>
    );
};

export default Header;