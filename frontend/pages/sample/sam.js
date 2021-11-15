function PostList({ posts }) {
    return (
      <>
        <h1>List of Posts</h1>
        
            <div key={posts.id}>
             
                <h2>
                  {posts.id} {posts.newsTitle}
                </h2>
             
              <hr />
            </div>
          )
       
      </>
    )
  }
  
  export default PostList
  
  export async function getStaticProps() {
    const response = await fetch('http://localhost:8080/homepage/Politics')
    const data = await response.json()
  
    return {
      props: {
        posts: data
      }
    }
  }