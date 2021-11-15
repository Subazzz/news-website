// //import {fetchdatafromRedux} from './index'
// //import index from './index'
// import axios from 'axios';
// import { useState } from 'react';
// import React from 'react'



// export default function readmore(props) {
//     const [category, setCategory] = useState(["politics"])
//     return (
//         <div>
//             {
//           props.news.map(news=>{
//               return(
//                 <div key={news.id}>
//                 <h2>  Category: {news.category} </h2>
//                    <br/> 
//                    <img src={news.image} alt="News Image"/>
                   
//                    <h2> Title:  {news.newsTitle} </h2>      
//                    <h3>  description:  {news.newsDescription}  </h3> 
          
//                    <hr/>
//              </div> 
//               )
//           })  
//         }
            
//         </div>
//     )
// }
// export const getServerSideProps=async()=>{
//     const[news] =await Promise.all([fetchPost()])
//      console.log("ServerSideProps check data",news)
//     return{
//         props:{news}
//     }
// }

// function fetchPost(){
//     return axios.get('localhost:8080/homepage/category').then(res=>{
//         return (res.data)?res.data:[]
//     }).catch(err=>{
//         return " Page Not Found !!!"
//     })

// }