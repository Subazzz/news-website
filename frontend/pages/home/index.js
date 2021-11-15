import React from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux'
import { appPost } from '../../redux/reducers/appAction';
import { useSelector } from 'react-redux';//extract info from reduex or fetcvh info from redux
import Navbar from '../../component/Navbar';
import Link from 'next/link';


export default
function index(props){

//seate.. useeffect.. onclick..

    const postdata=props.posts;
    //2. console.log("Postdata check",postdata)
    const  dispatch = useDispatch();
    dispatch(appPost(postdata)); //dispatch data to the  appActon.js -> appPost function
   const fetchdatafromRedux =useSelector(state=>state.posts.postsdata);
    //4. console.log("FetchdatafromRedux",fetchdatafromRedux)
    
    


    return(
        <div  >

        <h1 style= { {color: 'red'}}> NEWSFEED
         <nav style= { {textAlign : "right"}}> Category  :
           <select name = "dropdown"  on> 
            <option value = "Sports"  >Sports</option>
            <option value = "Politics">Politics</option>
            <option value = "Space">Space</option>
            <option value = "Technology">Technology</option>
            
         </select>
         </nav>
            {/* <Navbar /> */}

        </h1>
        
        {
          fetchdatafromRedux.map(post=>{
              return(
                <div key={post.id} style=  {{border: "2px solid blue"}}>
                <h2>  Category: {post.category} </h2>
                   <br/> 
                   <img src={post.image} alt="News Image"/>
                   
                   <h2> Title:  {post.newsTitle} </h2>      
                   <h3>  description:  {post.newsDescription}  </h3> 
        {/* <a href = "http://localhost:3000/home/newsid">lll </a> */}

            {/* <Link to={`http://localhost:3000/home/${post.category}`} > readmore</Link> */}
            {/* <Link href= "/home/[readmore]" as ={`/home/${post.category}`} > read more... </Link> */}
            {/* <button onClick = {handleclick}> next </button> */}
                   <hr/>
             </div> 
              )
          })  
        }

    </div>
    )
}

export const getServerSideProps=async()=>{
    const[posts] =await Promise.all([fetchPost1()])
   //  console.log("ServerSideProps check data",posts)
    return{
        props:{posts}
    }
}

function fetchPost(){
    return axios.get(`http://localhost:3000/home/${post.category}`).then(res=>{
        return (res.data)?res.data:[]
    }).catch(err=>{
        return " Page Not Found !!!"
    })

}
const fetchPost1 =()=>{
    return axios.get('http://localhost:8080/homepage').then(res=>{
        return (res.data)?res.data:[]
    }).catch(err=>{
        return " Page Not Found !!!"
    })
}