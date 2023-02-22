import React, {useEffect} from 'react';
import {Divider, Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import moment from "moment";
import CommentsBlock from "./CommentsBlock";
//import {getPost} from "../../actions/posts.js";


const PostDetails = () => {
    const {post, posts} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    //?getPost
    useEffect(() => {
        dispatch(getPost(id));

    }, [id]);
    //!RECOMMENDED POSTS

    if (!post) return null;
    const openPost = (_id) => navigate(`/posts/${_id}`);

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (
        <>
            <div className={"flex w-full  m-2 "}>
                <Paper className={"rounded-3xl w-[90%] m-[10px] m-[auto] h-full "} elevation={6}>
                    <div className={"flex w-full "}>
                        <div className={"m-2 flex-1"}>
                            <Typography variant="h3" component="h2">{post?.title}</Typography>
                            <Typography guttleftom="true" variant="h6" color="textSecondary"
                                        component="h2">{post?.tags.map((tag) => `#${tag} `)}</Typography>
                            <Typography guttleftom="true" variant="body1" component="p">{post?.message}</Typography>
                            <Typography variant="h6">Created by: {post?.name}</Typography>
                            <Typography variant="body1">{moment(post?.createdAt).fromNow()}</Typography>
                            <Divider style={{margin: '20px 0'}}/>
                            <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                            <Divider style={{margin: '20px 0'}}/>
                            <CommentsBlock post={post}/>
                            <Divider style={{margin: '20px 0'}}/>
                        </div>
                        <div className={" ml-8 mt-[5%]"}>
                            <img className={"flex flex-1 w-[450px] h-96  rounded-2xl object-cover m-auto m-2  "}
                                 src={post?.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                                 alt={post?.title}/>
                        </div>
                    </div>

                    {!!recommendedPosts.length &&(
                        <div className={" "}>
                            <Typography guttleftom="true" variant="h5" className={"text-center"}>You might also
                                like:</Typography>
                            <Divider/>
                            <div className={" grid  grid-cols-2 gap-2 "}>
                                {recommendedPosts.map(({title, name, message, likes, selectedFile, _id}) => (
                                    <Paper elevation={4} className={"cursor-pointer m-2 w-[550px] h-auto "}
                                           onClick={() => openPost(_id)}
                                           key={_id}>
                                        <div className={"ml-2"}>
                                            <Typography guttleftom="true" variant="h6">{title}</Typography>
                                            <Typography guttleftom="true" variant="subtitle2">{name}</Typography>
                                            <Typography guttleftom="true" variant="subtitle2">{message}</Typography>
                                            <Typography guttleftom="true"
                                                        variant="subtitle1">Likes: {likes.length}</Typography>
                                        </div>

                                        <img
                                            src={selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                                            alt={post?.title}
                                            className={"w-[200px] h-[150px] ml-80 p-2 rounded-xl"}/>


                                    </Paper>
                                ))}
                            </div>

                        </div>
                    )}

                </Paper>

            </div>
        </>
    );
};

export default PostDetails;