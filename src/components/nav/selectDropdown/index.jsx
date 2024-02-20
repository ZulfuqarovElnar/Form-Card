import React, { useState, useRef } from 'react';
import { Select, MenuItem, Input, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import '../css/selectDropdown.css';

function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState('option1'); 
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleOpen = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Navigate based on selected value
    if (selectedValue === 'option1') {
      navigate('/form/add');
    } else if (selectedValue === 'option2') {
      navigate('/form/list');
    }
  };

  const handleFocus = () => {
    setFocused(true); 
  };

  const handleBlur = () => {
    setFocused(false); 
  };


  return (
    <FormControl >
      <Select
        className='select'
        labelId="select-label"
        id="custom-select"
        value={selectedOption}
        onChange={handleChange}
        onOpen={handleOpen}
      > 
        <Input
            disableUnderline 
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={focused ? 'input-focused' : 'input'}
        />
          <MenuItem value="option1">Məhsul Silinmə (Əlavə et/ Dəyiş)</MenuItem>
          <MenuItem value="option2">Məhsul Silinmə Siyahısı</MenuItem>
      </Select>
      
    </FormControl>
  );
}

export default CustomSelect;
