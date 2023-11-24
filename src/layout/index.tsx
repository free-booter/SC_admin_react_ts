// import { Layout } from 'antd'
import React, { useEffect } from 'react'
import Asider from './components/Asider'
import { Outlet, useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

import { BaseLayoutWrapper } from './style'

// const { Header, Sider, Content } = Layout

function BaseLayout() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])
  return (
    <>
      {isAuthenticated && (
        <BaseLayoutWrapper>
          <div className="base-layout">
            <Asider />
            <div className="main">
              <Outlet />
            </div>
          </div>
        </BaseLayoutWrapper>
      )}
    </>
  )
}

export default BaseLayout
