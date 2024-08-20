import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import Social from './social'

function Footer({theme}) {
  return (
    <Box sx={{p:4, display:'flex', justifyContent:'space-between',  bgcolor: theme.palette.background.paper, color: theme.palette.text.primary,}}>
      <Typography>© 2024 AQ</Typography>
<Box mr={5}>
      <Social/>
      </Box>
    </Box>
  )
}

export default Footer
