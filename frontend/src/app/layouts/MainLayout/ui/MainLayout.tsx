import { Container } from '@mui/material'

import { Outlet } from 'react-router'

import { MainHeader } from '@base/widgets'

import { LayoutContainer } from './MainLayout.styles'

export const MainLayout = () => (
  <LayoutContainer>
    <MainHeader />
    <Container>
      <Outlet />
    </Container>
  </LayoutContainer>
)
