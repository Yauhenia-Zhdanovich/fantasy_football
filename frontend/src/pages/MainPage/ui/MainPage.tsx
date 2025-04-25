import { Box } from '@mui/material'

import { TeamStatsCard, PlayerStatsCard, TeamCard } from '@base/entities'

export const MainPage = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, py: 5 }}>
    <TeamStatsCard />
    <PlayerStatsCard />
    <TeamCard index={1} />
  </Box>
)
