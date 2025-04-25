import { Box, TableBody, TableContainer } from '@mui/material'
import { grey } from '@mui/material/colors'
import styled from 'styled-components'

export const Outer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const StyledTableContainer = styled(TableContainer)({
  borderRadius: '4px',
  border: '1px solid',
  borderColor: grey[300],
})

export const StyledTableBody = styled(TableBody)({
  backgroundColor: '#ffffff',
})
