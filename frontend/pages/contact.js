import Head from 'next/head';
import styled from 'styled-components';

export default function About() {
    return (
      <>
       <header> NEWSFEED
    </header>

    <ul>
  <li><a href="/usecase">Home</a></li>
  <li><a href="/usecase/today/tdy">News</a></li>
  <li><a href="contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul>
         <Head>
          <title>Contact</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        
          <header>Contact</header>

          <p>For contact <br />
            email : newsfeed@bbs.com <br />
            twitter : @newsfeed <br />
            contact no : 0417-67622  <br />
          </p>

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
`}</style>
      </>
    );
  }