import React from 'react';
import {Link} from "react-router-dom";
import {Toolbar, Avatar, Typography, Button} from "@material-ui/core";



const Header = () => {
    const user = false;
    return (
        <>
            <div className=" flex w-full bg-blue-700 h-16 items-center justify-between ">
                <div className={"flex   ml-4  w-[120px] h-10 bg-white rounded-lg items-center justify-center"}>
                    <Link to={"/home"}>
                        <span className={"text-blue-600 text-sx  font-bold tracking-wider "}>ANNASOCIAL</span>
                    </Link>
                </div>

                <Toolbar className={"flex w-96 justify-between items-center flex gap-50 relative -left-30"}>
                    {user ? (<div>
                        <Typography className={"text-xl text-white left-1 absolute top-7"}>
                            Name
                        </Typography>
                        <Avatar src={"/"} className={"right-20 top-5"}></Avatar>
                        <Button component={Link} to={"/auth"} variant="contained" color={"secondary"} className={"left-60 -top-6"}>Logout</Button>
                    </div>):(<Button variant="contained" className={"left-60 -top-0.5 text-white"} >Sign In</Button>)}
                </Toolbar>
            </div>
        </>
    );
};

export default Header;