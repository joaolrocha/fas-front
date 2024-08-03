import { TextField } from "@mui/material";

export default function FormFeatures() {
  return (
    <div className="form-features-container">
      <div className="form-features-content">
        <div className="form-features-content-title">
          <h2>Cadastro de recurso</h2>
        </div>

        <div className="form-features-content-body">
          <div className="form-features-content-body-title1">
            <p>Dados</p>
          </div>
          <div className="form-features-content-body-1">
            <TextField
              id="Nome"
              label="Nome"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Data de nascimento"
              label="Data de nascimento"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="CPF"
              label="CPF"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="RG"
              label="RG"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </div>

          <div className="form-features-content-body-2">
            <TextField
              id="CEP"
              label="CEP"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Endereco"
              label="Endereco"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Bairro"
              label="Bairro"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Cidade"
              label="Cidade"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Estado"
              label="Estado"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}