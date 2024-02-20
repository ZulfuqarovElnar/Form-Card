import React from 'react';
import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';


export default function Form() {

  return (
    <Box >
      <Outlet />
    </Box>
  );
}
