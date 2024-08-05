import { TextField } from "@mui/material";


import './_formFeatures.scss';

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

          <div className="form-features-content-body-title3">
            <p>Dados de contato</p>
          </div>
          <div className="form-features-content-body-3">
            <TextField
              id="Telefone"
              label="Telefone"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Celular"
              label="Celular"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="email particular"
              label="Email particular"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Email Profissional"
              label="Email profissional"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </div>

          <div className="form-features-content-body-title4">
            <p>Dados bancarios</p>
          </div>
          <div className="form-features-content-body-4">
            <TextField
              id="Custo hora"
              label="Custo hora"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Banco"
              label="Banco"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Agencia"
              label="Agência"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Conta"
              label="Conta"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </div>

          <div className="form-features-content-body-title5">
            <p>Dados empresariais</p>
          </div>
          <div className="form-features-content-body-5">
            <TextField
              id="Custo hora"
              label="Custo hora"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Banco"
              label="Banco"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Agencia"
              label="Agência"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="Conta"
              label="Conta"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}