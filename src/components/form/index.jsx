import React, { useState } from 'react';
import { Box, Card, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import LooksOneIcon from '@mui/icons-material/LooksOne';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import './css/form.css';
import FormTable from './form-table';
import FormOperation from './form-operation';

export default function Form() {
  const [selectedOptionOne, setSelectedOptionOne] = useState('optionOne'); 
  const [selectedOptionTwo, setSelectedOptionTwo] = useState('optionTwo'); 

  const handleChangeOptionOne = (event) => {
    setSelectedOptionOne(event.target.value);
  };

  const handleChangeOptionTwo = (event) => {
    setSelectedOptionTwo(event.target.value);
  };

  return (
    <Box className="box-container">
      <Typography className='typography-header' variant="h5">
        <LooksOneIcon className='looks-one-icon'/>
        Məhsul Silinmə (Əlavə et/ Dəyiş)
      </Typography>
      <Box className="box-form-body">
        <Box className="box-form-header">
          <Typography className='form-content'>Məzmun Məlumatları</Typography>
          <Card className='form-card'>
            <Grid className='form-grid' container spacing={3}>
              <Grid item xs={12}>
                Məzmun
                <TextField className='form-textfield' fullWidth />
              </Grid>
              <Grid item xs={4}>
                Şirkət
                <FormControl className='form-textfield' fullWidth>
                  <Select
                    labelId="select-label1"
                    id="custom-select1"
                    value={selectedOptionOne}
                    onChange={handleChangeOptionOne}
                  > 
                    <MenuItem value="optionOne">Tac MMC</MenuItem>
                    <MenuItem value="optionTwo">Mugam MMC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                Filial
              <FormControl className='form-textfield' fullWidth>
                  <Select
                    labelId="select-label2"
                    id="custom-select2"
                    value={selectedOptionTwo}
                    onChange={handleChangeOptionTwo}
                  > 
                    <MenuItem value="optionOne">Binəqədi Filial</MenuItem>
                    <MenuItem value="optionTwo">Baş ofis</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                Əməliyyat Tarixi
                <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker  className='form-datepicker'/>
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Card>
          <FormTable />
          <FormOperation />
        </Box>
      </Box>
    </Box>
  );
}
