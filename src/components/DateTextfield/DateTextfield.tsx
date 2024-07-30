// src/components/DateTextField.tsx
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface DateTextFieldType {
  label?: string
}

const DateTextField: React.FC<DateTextFieldType> = ({label}) => {
  return (
    <TextField
      id="date"
      label={label}
      variant="outlined"
      sx={{ width: '100%' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end">
              <CalendarTodayIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DateTextField;
