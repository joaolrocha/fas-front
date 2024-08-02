import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import DateTextField from "../DateTextfield/DateTextfield";

import './_formProject.scss';
import { useNavigate } from "react-router-dom";

export default function FormProject() {
  const navigate = useNavigate()
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleBack = () => {
    navigate('/listprojects')
  }

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
          <div className="form-project-content-body-4">
            <DateTextField
              label="Orçamento total"
            />
            <DateTextField
              label="Valor hora"
            />
          </div>
        </div>
        <div className="form-project-content-footer">
          <button className="button-system projectvoltar" onClick={handleBack}>Voltar</button>
          <button className="button-system projectconfirmar">Confirmar</button>
        </div>
      </div>
    </div>
  )
}