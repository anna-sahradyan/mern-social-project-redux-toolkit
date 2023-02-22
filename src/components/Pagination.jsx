import React, {useEffect} from 'react';
import { Pagination } from '@mui/material';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PaginationItem} from '@mui/material';
//import {getPosts} from "../actions/posts";

const Paginate = ({page}) => {
    //const {numberOfPages} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    //?getPosts
    // useEffect(() => {
    //     if (page) {
    //         dispatch(getPosts(page));
    //     }
    // }, [dispatch, page]);
    return (
        <>
            <Pagination
                className={""}
                // count={numberOfPages}
                page={Number(page) || 1}
                variant={"outlined"}
                color={"primary"}
                renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}
                    />
                )}
            />
        </>
    );
};

export default Paginate;