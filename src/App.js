import React from 'react';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";


const App = () => {
    return (
        <>

            <Layout>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                </Routes>
            </Layout>
        </>
    );
};

export default App;
