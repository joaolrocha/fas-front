import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import DateTextField from "../DateTextfield/DateTextfield";

export default function FormProject() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };


  return (
    <div className="form-project-container">
      <div className="form-project-content">
        <div className="form-project-content-title">
          <h2>Cadastrar Projeto</h2>
        </div>

        <div className="form-project-content-body">
          <div className="form-project-content-body-1">
            <TextField
              id="código"
              label="Código"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="descrição projeto"
              label="Descrição"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </div>

          <div className="form-project-content-body-2">
            <DateTextField
              label="Data de inicio"
            />
            <DateTextField
              label="Data de término"
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo do projeto</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-project-content-body-3">

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gerente Projeto</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

          </div>
        </div>
      </div>
    </div>
  )
}