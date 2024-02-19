import * as React from 'react';
import { Box, Button, FormControl, MenuItem, Paper, Select, Table, TextField} from '@mui/material';

import "../css/table.css";


export default function FormTable() {
  return (
    <Box className="TableContainer">
        Məhsul Siyahısı
        <Paper
            variant="outlined"
            className="Table"
        >
            <Table
            borderAxis="bothBetween"
            stripe="odd"
            hoverRow
            >
            <thead>
                <tr>
                <th style={{ width: 200 }}>Məhsul undefined</th>
                <th style={{ width: 200 }}>Məhsul Növü undefined</th>
                <th style={{ width: 200 }}>Vahid undefined</th>
                <th style={{ width: 200 }}>Miqdar undefined	</th>
                <th style={{ width: 200 }}>Qeyd undefined</th>
                <th style={{ width: 200 }}>Əlavə et undefined</th>
                <th style={{ width: 200 }}>Dəyiş undefined</th>
                <th style={{ width: 200 }}>Sil undefined</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <FormControl className='form-textfield' fullWidth>
                        <Select
                            sx={{padding: '0px 8px', height: '40px'}}
                            labelId="select-label1"
                            id="custom-select1"
                        > 
                            <MenuItem value="optionOne">Çay dəsti</MenuItem>
                            <MenuItem value="optionTwo">Stəkan dəsti</MenuItem>
                            <MenuItem value="optionTwo">Stəkan altlıq</MenuItem>
                        </Select>
                    </FormControl>
                    </td>
                    <td>
                    <FormControl className='form-textfield' fullWidth>
                        <Select 
                            sx={{padding: '0px 8px', height: '40px'}}
                            labelId="select-label1"
                            id="custom-select1"
                        > 
                            <MenuItem value="optionOne">Hazır Məhsul</MenuItem>
                            <MenuItem value="optionTwo">Xammal</MenuItem>
                            <MenuItem value="optionTwo">Mal</MenuItem>
                        </Select>
                    </FormControl>
                    </td>
                    <td>
                    <FormControl className='form-textfield' fullWidth>
                        <Select 
                            sx={{padding: '0px 8px', height: '40px'}} 
                            labelId="select-label1"
                            id="custom-select1"
                        > 
                            <MenuItem value="optionOne">kg</MenuItem>
                            <MenuItem value="optionTwo">qram</MenuItem>
                            <MenuItem value="optionTwo">litr</MenuItem>
                            <MenuItem value="optionTwo">sm</MenuItem>
                            <MenuItem value="optionTwo">km</MenuItem>
                        </Select>
                    </FormControl>
                    </td>
                    <td>
                        <FormControl className='custom-textfield' fullWidth>
                            <TextField 
                                fullWidth 
                            />
                        </FormControl>
                    </td>
                    <td>
                        <FormControl className='custom-textfield' fullWidth>
                            <TextField 
                                fullWidth 
                            />
                        </FormControl>
                    </td>


                    <td>
                        <Button size="sm" >
                            Əlavə et
                        </Button>
                    </td>
                    <td>
                        <Button size="sm">
                            Dəyiş
                        </Button>
                    </td>
                    <td>
                        <Button size="sm" >
                            Sil
                        </Button>
                    </td>
                </tr>
            </tbody>
            </Table>
        </Paper>
    </Box>
  );
}