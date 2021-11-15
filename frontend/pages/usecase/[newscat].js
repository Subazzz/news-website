import { useRouter } from 'next/router'

function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
       <header> NEWSFEED
    </header>

    <ul>
  <li><a href="/sample">Home</a></li>
  <li><a href="/sample">News</a></li>
  <li><a href="contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul>
       
        <h2>  Category: {post.category} </h2> <hr />
                   <br/> 
                   <img src={post.image} alt="News Image" />
                   
                   <h2> Title:  {post.newsTitle} </h2>      
                   <h3>  description:  {post.newsDescription}  </h3> 
                   <p> {post.longDiscription}  </p>
      
                  <style jsx global>{`
                  header{

                    color:Red;
                    
                    background: black;
                    
                    text-align:center;
                    font-size: 30px;
                    
                    font-weight: 400;
                    
                    line-height: 4;
                    
                    }
                    ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    background-color: #333;
                    }
                    
                    li {
                    float: left;
                    }
                    
                    li a {
                    display: block;
                    color: white;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                    }
                    
                    /* Change the link color to #111 (black) on hover */
                    li a:hover {
                    background-color: #ff0000;
                    }
                    .active {
                    background-color: #04AA6D;
                    }
                 div{
                  background-color: #0099e5;
                 }

                  img {
                    display: block;
                  margin-left: auto;
                  margin-right: auto;
                  width: 30%;
                
                  }
                  `} </style>
    </>
  )
}

export default Post

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://localhost:8080/num/${params.newscat}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true
    }
  }

  console.log(`Generating page for /posts/${params.newscat}`)
  return {
    props: {
      post: data
    }
  }
}

export async function getStaticPaths() {
  // const response = await fetch('')
  // const data = await response.json()
  // const paths = data.map(post => {
  //   return {
  //     params: { postId: `${post.id}` }
  //   }
  // })

  return {
    paths: [
      { params: { newscat: '1' } },
      { params: { newscat: '2' } },
      { params: { newscat: '3' } }
    ],
    fallback: true
  }
}