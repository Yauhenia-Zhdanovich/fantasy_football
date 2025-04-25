import { DeleteTeam } from '@base/features'
import { TeamCard } from '@base/entities'

import { StyledList } from './TeamsList.styles'
import { ListItem } from '@mui/material'

export const TeamsList = () => (
  <StyledList>
    <ListItem disablePadding>
      <TeamCard index={1} actionDelete={<DeleteTeam />} />
    </ListItem>
    <ListItem disablePadding>
      <TeamCard index={2} actionDelete={<DeleteTeam />} />
    </ListItem>
    <ListItem disablePadding>
      <TeamCard index={3} actionDelete={<DeleteTeam />} />
    </ListItem>
  </StyledList>
)
