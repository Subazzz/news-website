import Link from 'next/link'
//import './mystyles.css'
function PostList({ posts }) {
  return (
    <>
    <header> NEWSFEED
    </header>

    <ul>
  <li><a href="/usecase">Home</a></li>
  <li><a href="/usecase/today/tdy">Today News</a></li>
  <li><a href="contact">Contact</a></li>
  <li><a href="/about">About</a></li>
   
</ul>
<div class="dropdown">
  <button class="dropbtn">Category</button>
  <div class="dropdown-content">
    <a href="/sample/Sports">Sports</a>
    <a href="/sample/Technology">Technology</a>
    <a href="/sample/Education">Education</a>
    <a href="/sample/Politics">Politics</a>
  </div> </div> 
  <div class="dropdown">
  <button class="dropbtn">District</button>
  <div class="dropdown-content">
    <a href="/sample/Kanyakumari">Kanyakumari</a>
    <a href="/sample/Madurai">Madurai</a>
    <a href="/sample/Trichy">Trichy</a>
    <a href="/sample/Politics">Politics</a>
  </div> </div> 
       <h1 style= { {color: 'red'}}> NEWSFEED</h1>
    try {
       posts.map(post => {
        return (
          
           <div key={post.id}  >
             <body>
                <h2>  Category: {post.category} </h2>
                   <br/> 
                   <img src={post.image} alt="News Image"/>
                   
                   <h2> Title:  {post.newsTitle} </h2>      
                   <h3>  description:  {post.newsDescription}  </h3> 
              <button>
              <Link  href={`usecase/${post.no}`}  > read more... </Link>
              </button>
</body>

            <hr />
           


          </div>
        )
      })}
     catch (err) {
      console.log(err)
    } 
    </>
  )
}

export default PostList

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(
      `http://localhost:8080/cat/${params.newscat}`
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
 

    const response = await fetch(`http://localhost:8080/cat/${params.newscat}`)
    const data = await response.json()
    const paths = data.map(post => {
      return {
        params: { postId: `${post.newscat}`.toString() }
      }
    })
  
    return {
      paths,
      fallback: true
    }
  }