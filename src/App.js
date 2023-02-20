import React from 'react';
import Layout from "./components/Layout";
import {Navigate, Route, Routes} from "react-router";
import Home from "./components/Home";
import PostDetails from "./components/postDetails/PostDetails";
import Auth from "./components/auth/Auth";


const App = () => {
    const user = true;
    return (
        <>

            <Layout>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/posts"} element={<Home/>}/>
                    <Route path={"/auth"} element={<Auth/>}/>
                    <Route path={"/posts/:id"} element={<PostDetails/>}/>

                    {/*<Route*/}
                    {/*    path="/auth"*/}
                    {/*    element={!user ? <Auth/> : <Navigate to={"/posts"}/>}*/}
                    {/*/>*/}
                </Routes>
            </Layout>
        </>
    );
};

export default App;
