import { Chip, Divider, Typography } from '@mui/material'

import { StatsTable } from '@base/ui'

import { tableHeaders } from '../../config'
import { mockTeam } from '../../mock'
import {
  CardContainer,
  HeaderContainer,
  TeamInfoContainer,
  TeamLogo,
  TeamInfo,
  LeagueLogo,
  StadiumContainer,
  StadiumLogo,
  StadiumInfo,
} from './TeamStatsCard.styles'

export const TeamStatsCard = () => {
  return (
    <CardContainer>
      <HeaderContainer>
        <TeamInfoContainer>
          <TeamLogo
            component={'img'}
            src={mockTeam.team.logo}
            alt={'Team logo'}
          />
          <TeamInfo>
            <Typography>{mockTeam.team.name}</Typography>
            <Typography color={'textSecondary'} variant={'subtitle2'}>
              Founded: {mockTeam.team.founded}
            </Typography>
          </TeamInfo>
        </TeamInfoContainer>
        <Chip
          size={'small'}
          label={'UEFA Champions League'}
          icon={
            <LeagueLogo
              component={'img'}
              src={mockTeam.league.logo}
              alt={'League logo'}
            />
          }
        />
      </HeaderContainer>
      <Divider />
      <StadiumContainer>
        <StadiumLogo
          component={'img'}
          src={mockTeam.venue.image}
          alt={'Stadium logo'}
        />
        <StadiumInfo>
          <Typography>{mockTeam.venue.name}</Typography>
          <Typography color={'textSecondary'} variant={'subtitle2'}>
            {`${mockTeam.venue.address}, ${mockTeam.league.country.name}`}
          </Typography>
          <Typography color={'info'} variant={'subtitle2'}>
            Capacity: {mockTeam.venue.capacity}
          </Typography>
        </StadiumInfo>
      </StadiumContainer>
      <StatsTable
        header={tableHeaders}
        body={[
          mockTeam.stats.played,
          mockTeam.stats.wins,
          mockTeam.stats.draws,
          mockTeam.stats.loses,
          mockTeam.stats.goals,
        ]}
      />
    </CardContainer>
  )
}
