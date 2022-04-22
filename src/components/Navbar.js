import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/LOGO.png'

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='navlinks'>
          <Link className='link' to={'/'}>
            Home
          </Link>
          <Link className='link' to={'/about'}>
            AboutUs
          </Link>
          <Link className='link' to={'/products'}>
            Family
          </Link>
          <Link className='link' to={'/login'}>
            InvitationCard
          </Link>
        </div>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-bottom: 0px;
  nav {
    display: flex;
    justify-content: space-between;
    background-color: var(--primary-2);
    padding: 1.5rem;
  }
  .logo {
    img {
      position: absolute;
      top: 15px;
      left: 40px;
      height: 60px;
      width: 60px;
    }
  }
  .link {
    margin-left: 0.5rem;
    color: var(--white);
    background-color: var(--primary-3);
    padding: 0.3rem;
    border-radius: var(--borderRadius);
    :hover {
      background-color: var(--primary-5);
    }
  }
`

export default Navbar
