import React from 'react'
import styles from './Header.css'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className={styles.header}>
    <div>
      <h1>reactjs_list.io</h1>
      <nav>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
