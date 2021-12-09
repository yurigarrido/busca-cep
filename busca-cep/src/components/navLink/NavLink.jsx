import React from 'react'
import {useLocation, Link} from 'react-router-dom';
import { Nav } from './styled';

const NavLink = () => {
  const { pathname } = useLocation()
  const pageName = pathname.split('/')[1]

  return (
    <Nav>
      <Link to='/'>Home</Link>
      <> {'>'} </>
      <Link to={pathname}>{pageName}</Link>
    </Nav>
  )
}

export default NavLink
