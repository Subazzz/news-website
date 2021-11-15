import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
height: 80 px;
background : #000;
color : #fff;
display :flex;
justify_content: space-between;
align-items: center;
  color: #fff;
`;
const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar=()=> {
    return (
        <Nav>
            <div>
                <Link href='/home' passHref ><StyledLink>News</StyledLink> </Link>
            </div>
            {/* <div>
                <Link href='/' passHref><StyledLink>Home</StyledLink> </Link>
            </div>
            <div>
                <Link href='/about' passHref><StyledLink>About</StyledLink> </Link>
            </div>
            <div>
                <Link href='/contact'><StyledLink>Contact</StyledLink> </Link>
            </div> */}
        </Nav>
    );
}

export default Navbar
