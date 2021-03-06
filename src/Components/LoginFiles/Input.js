import React from "react";
import { TextField, Grid, IconButton, InputAdornment } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
  half,
  quarter,
  rows,
  multiline,
  twothird,
  required,
  value

}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12} md={quarter ? 4 : (twothird ? 8 : 12)} >
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required={required}
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        rows={4}
        multiline={multiline}
        value={value}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
