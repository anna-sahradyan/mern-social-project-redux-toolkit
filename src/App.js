import React from 'react';
import Layout from "./components/Layout";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Navigate, Route, Routes} from "react-router";
import PostDetails from "./components/postDetailes/PostDetails";
import Auth from "./components/auth/Auth";
import Home from "./components/Home";


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (<>
        <Layout className={"flex w-full "}>
            <ToastContainer/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/posts"} element={<Home/>}/>
                <Route path={"/posts/:id"} element={<PostDetails/>}/>
                <Route
                    path="/auth"
                    element={!user ? <Auth/> : <Navigate to={"/posts"}/>}
                />
            </Routes>
        </Layout>
    </>);
};

export default App;