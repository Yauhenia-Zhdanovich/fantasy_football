import type { FC } from 'react'

import {
  ActionsContainer,
  CardContainer,
  FlagLogo,
  InfoContainer,
  TextContainer,
  TitleContainer,
  IndexTypography,
} from './TeamCard.styles'
import type { TeamCardProps } from './TeamCard.props'
import { Button, Chip, Typography } from '@mui/material'

import { mockTeam } from '../../mock'

export const TeamCard: FC<TeamCardProps> = ({ index }) => (
  <CardContainer>
    <InfoContainer>
      <TitleContainer>
        <TextContainer>
          <IndexTypography variant={'subtitle2'}>{index}.</IndexTypography>
          <Typography variant={'subtitle2'}>{mockTeam.team.name}</Typography>
        </TextContainer>
        <Chip
          label={mockTeam.league.country.name}
          icon={
            <FlagLogo
              component={'img'}
              src={mockTeam.league.country.flag}
              alt={'Country flag'}
            />
          }
        />
      </TitleContainer>
      <Typography variant={'subtitle2'} color={'primary'}>
        Total points: {mockTeam.stats.totalPoints}
      </Typography>
    </InfoContainer>
    <ActionsContainer>
      <Button variant={'text'} color={'inherit'}>
        Edit
      </Button>
      <Button variant={'text'} color={'inherit'}>
        Delete
      </Button>
    </ActionsContainer>
  </CardContainer>
)
