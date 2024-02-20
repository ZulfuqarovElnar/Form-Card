import React from 'react'
import FormList from '../../../components/form-list'
import { Box, Typography } from '@mui/material'
import LooksOneIcon from '@mui/icons-material/LooksOne';

export default function FormListPage() {
  return (
    <Box className="box-container">
        <Typography className='typography-header' variant="h5">
            <LooksOneIcon className='looks-one-icon'/>
            Məhsul Silinmə Siyahısı
        </Typography>
        <Box className="box-form-body">
            <Box className="box-form-header">
                <FormList/>
            </Box>
        </Box>
    </Box>
  )
}
