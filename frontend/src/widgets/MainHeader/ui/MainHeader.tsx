import { Tabs } from '@mui/material'

import { LogoutButton } from '@base/features'

import {
  HeaderContainer,
  ContentContainer,
  LogoTypography,
  Level,
  CustomTab,
  TabsContainer,
} from './MainHeader.styles'

export const MainHeader = () => {
  return (
    <HeaderContainer>
      <Level isTop={true}>
        <ContentContainer>
          <LogoTypography>Fantasy league</LogoTypography>
          <LogoutButton />
        </ContentContainer>
      </Level>
      <Level>
        <TabsContainer>
          <Tabs value={1} variant={'fullWidth'}>
            <CustomTab label={'Statistics'} value={1} />
            <CustomTab label={'Fantasy Teams'} value={2} />
          </Tabs>
        </TabsContainer>
      </Level>
    </HeaderContainer>
  )
}
