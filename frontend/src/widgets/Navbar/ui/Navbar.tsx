import { memo, useState } from 'react';
import { Header, Navigation, NavItem } from './Navbar.style';
import { RoutePaths } from '../../../shared/config/routeConfig/routeConfig';
import { Link } from 'react-router';


export const Navbar = memo(() => {
    const [statisticPage, setStatisticPage] = useState(true);
    const [teamPage, setTeamPage] = useState(false);

    const showTeamPage = () => {
        setStatisticPage(false);
        setTeamPage(true);
    }

    const showStatPage = () => {
        setTeamPage(false);
        setStatisticPage(true);
    }

    return (
        <>
            <Header>Fantasy league</Header>
            <Navigation>
                <NavItem 
                    onClick={showStatPage}
                    isActive={statisticPage}>
                        <Link
                            to={RoutePaths.statistics}
                            style={{
                                all: 'unset'
                            }}
                        >
                            STATISTICS
                        </Link>
                </NavItem>
                <NavItem 
                    onClick={showTeamPage}
                    isActive={teamPage}>
                        <Link
                            to={RoutePaths.fantasy_teams}
                            style={{
                                all: 'unset'
                            }}>
                            FANTASY TEAMS
                        </Link>
                </NavItem>
            </Navigation>
        </>
    );
});