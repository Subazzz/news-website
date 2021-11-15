import Link from 'next/link'

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
      {posts.map(post => {
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

h3 {

    margin: 0;

    padding: 0;

    font-size: 18px;

    font-weight: 400;

    line-height: 1.8;

    color: black;

    font-family: sans-serif;

  }

  h2 {

    font-weight: 700;



  }
  img {
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;

  }
 body {
    
    border: 2px black;
    background: hsl(186, 61%, 58%);
    align : center
  }

  p {

    margin-bottom: 10px;

  }
  button{

    display: inline-block;

    background-color: #7b38d8;

    border-radius: 5px;

    border: 2px double #cccccc;

    color: #eeeeee;

    text-align: center;

    font-size: 8px;

    padding: 10px;

    width: 150px;

    -webkit-transition: all 0.5s;

    -moz-transition: all 0.5s;

    -o-transition: all 0.5s;

    transition: all 0.5s;

    cursor: pointer;

    margin: 5px;

  }
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

`}</style>
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await fetch('http://localhost:8080/priority')
  const data = await response.json()

  return {
    props: {
      posts: data
    }
  }
}

