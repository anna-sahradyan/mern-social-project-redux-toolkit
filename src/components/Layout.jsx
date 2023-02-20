import React from 'react';
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={"flex w-full justify-between "}>
                {children}
            </div>
        </>
    );
};

export default Layout;