import React, { useState} from 'react';
import Form from "./form/Form";
import Posts from "./posts/Posts";
import { Paper} from "@material-ui/core";
import {useLocation} from "react-router";
import Pagination from "./Pagination";
//!useQuery
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const query = useQuery();
    const page = query.get("page") || 1;

    return (
        <>
            <div className={"flex w-full "}>
                <div className={" max-w-[calc(100%-400px)] "}>
                    <Posts setCurrentId={setCurrentId}/>
                </div>
                <div className={"w-96 absolute right-2 top-20"}>
                    <Paper elevation={6}
                           className={"grid justify-center items-center w-96 h-10 right-[10px]  bottom-[30px]"}>
                        <Pagination page={page}/>
                    </Paper>

                </div>

                <Form currentId={currentId} setCurrentId={setCurrentId}/>

            </div>
        </>
    );
};

export default Home;