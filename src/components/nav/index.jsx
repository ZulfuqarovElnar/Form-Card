import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SelectDropdown from './selectDropdown';

import '../nav/css/nav.css';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='appbar' >
        <Toolbar className='toolbar'>
          <Typography className='typography' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Form Card
          </Typography>
          <SelectDropdown />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
