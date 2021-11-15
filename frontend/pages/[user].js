import React from 'react';

function user({user}) {
    return (
        <div>
            Number of users
            {
                user.map((users)  =>{
                    return(
                    <div key={users.id} >
                        <p>{users.newsTitle} </p>
                        <p>{users.category} </p>
                         </div>
                    )
                })
            }
        </div>
    )
}

export default user;

export async function  getStaticProps(context) {
    const { params } = context
     const response = await fetch( `http://localhost:8080/cat/${params.user}`)
     const data = await response.json()
     console.log(data)
     return{
         props : {
             user : data

         }
     }

 }