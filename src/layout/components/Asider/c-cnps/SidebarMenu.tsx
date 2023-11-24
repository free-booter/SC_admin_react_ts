import { useRouteToMenu } from '@/hooks/useMapToMenu'
import { Menu } from 'antd'
import React, { useMemo } from 'react'

function SidebarMenu() {
  const menuItems = useMemo(() => {
    return useRouteToMenu()
  }, [])
  return <Menu mode="inline" items={menuItems} style={{ width: 210 }} />
}

export default SidebarMenu
