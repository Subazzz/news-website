import React from 'react';
import{useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import index from '.';
function newsid (props) {

    const rout = useRouter()
    const id = rout.query.newsid
    const fetchdatafromRedux =useSelector(state=>state.posts.postsdata)
    return (
        <div>
          news index{
             <p> {fetchdatafromRedux}</p> 

          }
        </div>
    );
}

export default newsid ;