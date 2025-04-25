import { Box, Chip } from '@mui/material'
import { grey } from '@mui/material/colors'

import styled from 'styled-components'

import type { ImageProps } from '@base/types'

export const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: grey[50],
  border: '1px solid',
  borderColor: grey[300],
  borderRadius: '4px',
  maxWidth: '1000px',
  padding: '16px',
})

export const PlayerInfo = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const PlayerDetails = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
})

export const PlayerImage = styled(Box)<ImageProps>({
  width: '40px',
  height: '40px',
  objectFit: 'contain',
  borderRadius: '4px',
})

export const Info = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const AffiliationContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '8px',
})

export const StyledChip = styled(Chip)({
  width: 'fit-content',
})

export const AffiliationLogo = styled(Box)<ImageProps>({
  width: 18,
  height: 18,
})
