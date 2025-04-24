import type { FC } from 'react'

import { Table, TableCell, TableHead, TableRow } from '@mui/material'

import type { StatsTableProps } from './StatsTable.props'
import { StyledTableContainer, StyledTableBody } from './StatsTable.styles'

export const StatsTable: FC<StatsTableProps> = ({ header, body }) => (
  <StyledTableContainer>
    <Table size={'small'}>
      <TableHead>
        <TableRow>
          {header.map((head) => (
            <TableCell key={head}>{head}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <StyledTableBody>
        <TableRow>
          {body.map((value) => (
            <TableCell key={value}>{value}</TableCell>
          ))}
        </TableRow>
      </StyledTableBody>
    </Table>
  </StyledTableContainer>
)
