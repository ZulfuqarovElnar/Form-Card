import React from 'react';
import { Box, Typography } from '@mui/material';
import LooksOneIcon from '@mui/icons-material/LooksOne';

import FormList from '../form-list';
import FormEdit from './form-edit';
import FormTable from './form-table';
import FormOperation from './form-operation';

import './css/form.css';

export default function Form() {

  return (
    <Box className="box-container">
      <Typography className='typography-header' variant="h5">
        <LooksOneIcon className='looks-one-icon'/>
        Məhsul Silinmə (Əlavə et/ Dəyiş)
      </Typography>
      <Box className="box-form-body">
        <Box className="box-form-header">
          {/* <FormEdit />
          <FormTable />
          <FormOperation /> */}
          <FormList />
        </Box>
      </Box>
    </Box>
  );
}
