
import React from 'react'

import { Box, Typography } from '@mui/material'
import LooksOneIcon from '@mui/icons-material/LooksOne';

import "../../../components/form-add/css/form.css"
import FormEdit from '../../../components/form-add/form-edit';
import FormTable from '../../../components/form-add/form-table';
import FormOperation from '../../../components/form-add/form-operation';
export default function FormAddPage() {
  return (
    <Box className="box-container">
        <Typography className='typography-header' variant="h5">
            <LooksOneIcon className='looks-one-icon'/>
            Məhsul Silinmə (Əlavə et/ Dəyiş)
        </Typography>
        <Box className="box-form-body">
            <Box className="box-form-header">
                <FormEdit />
                <FormTable />
                <FormOperation />
            </Box>
        </Box>
    </Box>
  )
}
