import { Box, type BoxProps } from '@mui/material'
import styled from 'styled-components'

import { grey } from '@mui/material/colors'

interface LogoProps extends BoxProps {
  src: string
  alt: string
}

export const CardContainer = styled(Box)({
  backgroundColor: grey[50],
  border: '1px solid',
  borderColor: grey[300],
  borderRadius: '4px',
  maxWidth: '536px',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingBottom: '16px',
})

export const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  paddingTop: '16px',
  paddingBottom: '16px',
})

export const TeamInfoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
})

export const TeamLogo = styled(Box)<LogoProps>({
  width: '40px',
  height: '40px',
  objectFit: 'contain',
})

export const TeamInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const LeagueLogo = styled(Box)<LogoProps>({ width: 18, height: 18 })

export const StadiumContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  paddingTop: '16px',
  paddingBottom: '16px',
})

export const StadiumLogo = styled(Box)<LogoProps>({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
})

export const StadiumInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})
