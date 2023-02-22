import React, {useEffect, useState} from 'react';
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux";
//import {createPost, updatePost} from "../../actions/posts";
import {useNavigate} from "react-router";


const Form = ({currentId, setCurrentId}) => {
    const user2 = false;
    const [postData, setPostData] = useState({title: '', message: '', tags: [], selectedFile: ''});
    const dispatch = useDispatch();
    //const post = useSelector((state) => (currentId ? state.posts.posts.find((p) => p._id === currentId) : null));
    const user = JSON.parse(localStorage.getItem("profile"));
    const navigate = useNavigate();
    //?submit

    const clear = () => {
        setCurrentId(0);
        setPostData({title: '', message: '', tags: [], selectedFile: ''});
    };
    // useEffect(() => {
    //     if (!post?.title) clear();
    //     if (post) setPostData(post);
    //
    //
    // }, [post])
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     if (currentId === 0) {
    //         dispatch(createPost({...postData, name: user?.result?.name}, navigate));
    //         clear();
    //
    //     } else {
    //         dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
    //         clear();
    //     }
    //
    //
    // }
    const handleSubmit = () => {
      
    }
    if (!user?.result.name) {
        return (
            <>
                <Paper className={"w-[300px] right-2 h-48 m-6 top-40 absolute"} >
                    <Typography variant={"h6"} align={"center"} className={"m-auto p-5"}>
                        Please Sign In to create your own memories and like other's memories.
                    </Typography>
                </Paper>
            </>
        )
    }
    return (
        <>

                <Paper elevation={6} className={"w-96  right-2 absolute mt-10  h-[500px] top-24 "}>
                    <form noValidate onSubmit={handleSubmit} className={"flex flex-wrap m-10 "}>
                        <Typography className={"top-2 absolute left-1/4"}
                                    variant={"h6"}>{currentId ? ` Editing ` : `Creating a `} Memory</Typography>
                        <TextField className={"-bottom-12"} name="title" variant="outlined" label="Title" fullWidth
                                   value={postData.title}
                                   onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                        <TextField className={"-bottom-16"} name="message" variant="outlined" label="Message" fullWidth
                                   minRows={"Infinity"}
                                   value={postData.message}
                                   onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                        <TextField className={"-bottom-20"} name="tags" variant="outlined" label="Tags (coma separated)"
                                   fullWidth
                                   value={postData.tags}
                                   onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}/>
                        <div className={"bottom-44 absolute "}>
                            <FileBase type="file" multiple={false}
                                      onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                        </div>
                        <Button className={"-bottom-40"} variant="contained" color="primary" size="large" type="submit"
                                fullWidth>Submit</Button>
                        <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth
                                className={"-bottom-44"}>Clear</Button>
                    </form>

                </Paper>

        </>
    );
};

export default Form;