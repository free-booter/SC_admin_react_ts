import React from 'react'
import { AsiderWrapper } from './style'
import logo from '@/assets/images/logo.png'
import SidebarMenu from './c-cnps/SidebarMenu'
// import SidebarItem from './c-cnps/SidebarItem'

function Asider() {
  return (
    <AsiderWrapper>
      <div className="asider">
        <div className="top-logo">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="title">SC Admin</div>
        </div>
        <div className="asider-menu">
          <SidebarMenu />
        </div>
      </div>
    </AsiderWrapper>
  )
}

export default Asider
