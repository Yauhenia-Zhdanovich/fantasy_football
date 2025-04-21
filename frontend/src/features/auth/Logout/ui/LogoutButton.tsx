import { Button } from '@mui/material'
import { ExitToApp } from '@mui/icons-material'

export const LogoutButton = () => (
  <Button variant={'contained'} endIcon={<ExitToApp />}>
    Logout
  </Button>
)
