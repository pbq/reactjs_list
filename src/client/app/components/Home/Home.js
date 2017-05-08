import React from 'react'
import Item from '../Item/Item'
import menus from '../../../../../list-items.json'

const Home = () => (
  <div>
    {menus.menus.map(menu => <Item {...menu} key={menus.slug} />)}
  </div>
)

export default Home
