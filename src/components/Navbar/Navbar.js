import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css';

export default function Navbar(props) {
  return (
      <div className='navbar'>
          <ul>
            <Link to='/' className='home'>Home</Link>
            <Link to='/sobremim' className='sobremim'>Sobre mim</Link>
            <Link to='/qualificacoes' className='qualificacoes'>Qualificacoes</Link>
          </ul>
      </div>
  )
}
