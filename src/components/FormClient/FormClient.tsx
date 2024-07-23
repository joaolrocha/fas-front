import { TextField } from '@mui/material'
import './_formCliente.scss'

const FormClient = () => {
  return (
    <div className='form-client-container'>
      <div className='form-client-container-title'>
        <h2>Cadastro de Clientes</h2>
      </div>

      <div className='form-client-container-body'>

        <div className='form-client-container-body-PJ'>
          <div className='form-client-container-body-PJ-title'>
            <h2>Dados de pessoa juridica</h2>
          </div>

          <div className='form-client-container-body-PJ-inputs'>
            <TextField
              id="outlined-basic"
              label="CNPJ*"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="outlined-basic"
              label="Razão Social*"
              variant="outlined"
              sx={{ width: '100%' }}
            />
            <TextField
              id="outlined-basic"
              label="Nome Fantasia*"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </div>

          <div className='form-client-container-body-address'>
            <div className='form-client-container-body-address-title'>
              <h2>Endereço</h2>
            </div>

            <div className='form-client-container-body-address-inputs'>
              <TextField
                id="outlined-basic"
                label="Logradouro"
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <TextField
                id="outlined-basic"
                label="Cidade"
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <TextField
                id="outlined-basic"
                label="Estado"
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <TextField
                id="outlined-basic"
                label="CEP"
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <TextField
                id="outlined-basic"
                label="Bairro"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </div>
          </div>

          <div className='form-client-container-body-contacts'>
            <div className='form-client-container-body-contacts-title'>
              <h2>Contatos</h2>
            </div>

            <div className='form-client-container-body-contacts-inputs'>
              <TextField
                id="outlined-basic"
                label="Nome do responsavel"
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <TextField
                id="outlined-basic"
                label="Email do responsavel"
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <TextField
                id="outlined-basic"
                label="Celular"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </div>
          </div>

          <div className='form-client-container-body-footer'>
            <button>Voltar</button>
            <button>Criar Cliente</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FormClient