import { Box, Container, styled, Tab, Typography } from '@mui/material'

import { grey } from '@mui/material/colors'

type LevelProps = {
  isTop?: boolean
}

export const HeaderContainer = styled(Box)({
  boxShadow: '0px 2px 1px rgba(0,0,0,0.2)',
})

export const Level = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isTop',
})<LevelProps>(({ isTop }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: isTop ? '70px' : '48px',
  backgroundColor: isTop ? grey[900] : '#ffffff',
}))

export const ContentContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const TabsContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: 0,
  },
}))

export const LogoTypography = styled(Typography)({
  color: '#ffffff',
  fontWeight: 500,
  fontSize: 24,
  lineHeight: '32.02px',
  letterSpacing: 0,
})

export const CustomTab = styled(Tab)({
  width: '268px',
})
