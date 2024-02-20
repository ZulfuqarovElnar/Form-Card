import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import "../css/operation.css"

export default function FormOperation() {
  return (
    <Box>
        <Typography>Əməliyyat</Typography>
        <Box className="operation">
            <Button size="sm" >
                Yadda Saxla
            </Button>
            <Button size="sm" >
                Ləgv et
            </Button>
        </Box>
    </Box>
  )
}
