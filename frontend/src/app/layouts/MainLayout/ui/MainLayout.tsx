import { Container } from '@mui/material'

import { Outlet } from 'react-router'

import { MainHeader } from '@base/widgets'

import { LayoutContainer } from './MainLayout.styles'
import { MainPage } from '@base/pages/MainPage/ui/MainPage'

export const MainLayout = () => (
  <LayoutContainer>
    <MainHeader />
    <Container>
      <Outlet />
      {/* temporary renders here before router implementation */}
      <MainPage />
    </Container>
  </LayoutContainer>
)
