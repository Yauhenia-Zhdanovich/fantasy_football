import { Box } from '@mui/material'

import { TeamsList } from '@base/widgets'
import { TeamStatsCard, PlayerStatsCard } from '@base/entities'

export const MainPage = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, py: 5 }}>
    <TeamStatsCard />
    <PlayerStatsCard />
    <TeamsList />
  </Box>
)
