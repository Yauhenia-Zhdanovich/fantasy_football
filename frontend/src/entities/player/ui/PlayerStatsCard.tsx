import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

import { StatsTable } from '@base/ui'

import { mockPlayer } from '../mock'
import {
  cardsHeader,
  duelsHeader,
  gamesHeader,
  goalsHeader,
  passesHeader,
  penaltyHeader,
} from '../config'
import {
  AffiliationContainer,
  AffiliationLogo,
  CardContainer,
  Info,
  PlayerDetails,
  PlayerImage,
  PlayerInfo,
  StyledChip,
} from './PlayerStatsCard.styles'

export const PlayerStatsCard = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const gridSize = isMobile ? 12 : 6

  return (
    <CardContainer>
      <PlayerInfo>
        <PlayerDetails>
          <PlayerImage
            component={'img'}
            src={mockPlayer.player.photo}
            alt={'Player image'}
          />
          <Info>
            <Typography>{mockPlayer.player.name}</Typography>
            <Typography variant={'subtitle2'} color={'info'}>
              Age: {mockPlayer.player.age}
            </Typography>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
              Born: {mockPlayer.player.birth}
            </Typography>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
              Height: {mockPlayer.player.height}
            </Typography>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
              Weight: {mockPlayer.player.weight}
            </Typography>
          </Info>
        </PlayerDetails>
        <AffiliationContainer>
          <StyledChip
            size={'small'}
            label={mockPlayer.team.name}
            icon={
              <AffiliationLogo
                component={'img'}
                src={mockPlayer.team.logo}
                alt={'Team logo'}
              />
            }
          />
          <StyledChip
            size={'small'}
            label={mockPlayer.league.name}
            icon={
              <AffiliationLogo
                component={'img'}
                src={mockPlayer.league.logo}
                alt={'League logo'}
              />
            }
          />
        </AffiliationContainer>
      </PlayerInfo>
      <Grid container spacing={1}>
        <Grid size={gridSize}>
          <StatsTable
            title={'Games'}
            header={gamesHeader}
            body={[
              mockPlayer.games.appearences,
              mockPlayer.games.position,
              mockPlayer.games.rating,
              mockPlayer.games.captain ? 'Yes' : 'No',
              mockPlayer.games.losses,
            ]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Goals'}
            header={goalsHeader}
            body={[
              mockPlayer.goals.total,
              mockPlayer.goals.conceded,
              mockPlayer.goals.assists,
              mockPlayer.goals.saves,
            ]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Passes'}
            header={passesHeader}
            body={[mockPlayer.passes.total, mockPlayer.passes.key]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Cards'}
            header={cardsHeader}
            body={[
              mockPlayer.cards.yellow,
              mockPlayer.cards.yellowred,
              mockPlayer.cards.red,
            ]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Penalty'}
            header={penaltyHeader}
            body={[
              mockPlayer.penalty.won,
              mockPlayer.penalty.committed,
              mockPlayer.penalty.scored,
              mockPlayer.penalty.missed,
              mockPlayer.penalty.saved,
            ]}
          />
        </Grid>
        <Grid size={gridSize}>
          <StatsTable
            title={'Duels'}
            header={duelsHeader}
            body={[mockPlayer.duels.total, mockPlayer.duels.won]}
          />
        </Grid>
      </Grid>
    </CardContainer>
  )
}
