import { Box, Button } from '@mui/material'
import React from 'react'

import '../form-list/css/form-list.css'
import FormListTable from './form-list-table'

export default function FormList() {
  return (
    <Box className='form-list'>
        <Button size="sm">
            Əlavə et 
        </Button>
        <FormListTable />
    </Box>
  )
}
