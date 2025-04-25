import { Box} from "@mui/material"
import { useState } from "react"
import { SwitchButton } from "./StatisticsPage.style";
import { DropdownMenu } from "../../../shared/ui/DropdownMenu/ui/DropdownMenu";
import { yearDropdownLabels } from "../../../shared/consts/dropdownLabels";
import { filteringYears } from "../../../shared/consts/filteringYears";


const StatisticsPage = () => {
    const [teamsActive, setTeamsActive] = useState(true);
    const [playersActive, setPlayersActive] = useState(false);

    const onTeams = () => {
        setPlayersActive(false)
        setTeamsActive(true)
    }

    const onPlayers = () => {
        setTeamsActive(false)
        setPlayersActive(true)
    }

    return (
        <>
            <Box sx={{marginTop: '31px'}}>
                <SwitchButton 
                    isActive={teamsActive}
                    onClick={onTeams}
                    variant="outlined" 
                    className=""
                    sx={{
                        borderRight: 'none',
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        }}>
                        TEAMS
                </SwitchButton>
                <SwitchButton 
                    onClick={onPlayers}
                    variant="outlined"
                    isActive={playersActive}
                    sx={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }}
                    >
                        PLAYERS
                </SwitchButton>
            </Box>
            <Box sx={{marginTop: '24px'}}>
                <DropdownMenu 
                    width="220px"
                    Labels={yearDropdownLabels}
                    filteringValues={filteringYears}
                />
            </Box>
        </>
    )
}

export default StatisticsPage;