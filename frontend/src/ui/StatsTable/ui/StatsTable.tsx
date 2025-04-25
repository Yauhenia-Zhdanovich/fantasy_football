import type { FC } from 'react'

import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import type { StatsTableProps } from './StatsTable.props'
import {
  StyledTableContainer,
  StyledTableBody,
  Outer,
} from './StatsTable.styles'

export const StatsTable: FC<StatsTableProps> = ({ header, body, title }) => (
  <Outer>
    {title && (
      <Typography variant={'subtitle2'} color={'textSecondary'}>
        {title}
      </Typography>
    )}
    <StyledTableContainer>
      <Table size={'small'}>
        <TableHead>
          <TableRow>
            {header.map((head) => (
              <TableCell key={head}>
                <Typography color={'textPrimary'} variant={'subtitle2'}>
                  {head}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <StyledTableBody>
          <TableRow>
            {body.map((value, i) => (
              <TableCell key={header[i]}>{value}</TableCell>
            ))}
          </TableRow>
        </StyledTableBody>
      </Table>
    </StyledTableContainer>
  </Outer>
)
