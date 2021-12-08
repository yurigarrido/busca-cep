import React from 'react'
import {useLocation, Link} from 'react-router-dom';

const NavLink = () => {
  const { pathname } = useLocation()
  const pageName = pathname.split('/')[1]

  return (
    <div>
      <Link to='/'>Home</Link>
      <> {'>'} </>
      <Link to={pathname}>{pageName}</Link>
    </div>
  )
}

export default NavLink
