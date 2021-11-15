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
         <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
  <style jsx global>{`
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

`}

</style>
</div>
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

                   <Link  href={`sample/${post.category}`}  > read more... </Link>

        {/* <a href = "http://localhost:3000/home/newsid">lll </a> */}

            {/* <Link to={`http://localhost:3000/home/${post.category}`} > readmore</Link> */}
            {/* <Link href= "/news/[readmore]" as ={`/news/${post.category}`} > read more... </Link> */}
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
    return axios.get('http://localhost:8080/priority' ).then(res=>{
        return (res.data)?res.data:[]
    }).catch(err=>{
        return " Page Not Found !!!"
    })
}