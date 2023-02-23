import React from 'react';
import {CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import Post from "./Post";

const Posts = ({setCurrentId}) => {
    // const {posts, isLoading} = useSelector((state) => state.posts);
    // if (!posts.length && !isLoading) return "No Posts!!"
    return (
        <>
{/*            <div className={" grid  gap-4 grid-flow-dense p-2 "}>*/}
{/*                {isLoading ? (<CircularProgress/>) : (*/}
{/*                    posts.map((item, index) =>*/}
{/*                        <div  key={`${item}_${index}`} className={" "}>*/}
{/*                        <Post post={item} setCurrentId={setCurrentId}/>*/}
{/*                        </div>*/}
{/*                    ))}*/}

{/*</div>*/}
        </>
    );
};

export default Posts;