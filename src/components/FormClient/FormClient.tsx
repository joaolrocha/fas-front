// src/components/FormClient/FormClient.tsx
import { TextField } from '@mui/material';

import { cnpjMask } from '../../utils/inputMasks/cnpjMask';
import { phoneMask } from '../../utils/inputMasks/phoneMask';
import './_formCliente.scss';
import useFormClient from './useFormClient';

const FormClient = () => {
  const { formState, handleChange, handleCepChange, handleSubmit, handleBackNav } = useFormClient();

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
              id="cnpj"
              label="CNPJ*"
              variant="outlined"
              sx={{ width: '100%' }}
              value={cnpjMask(formState.cnpj)}
              onChange={handleChange}
            />
            <TextField
              id="razaoSocial"
              label="Razão Social*"
              variant="outlined"
              sx={{ width: '100%' }}
              value={formState.razaoSocial}
              onChange={handleChange}
            />
            <TextField
              id="nomeFantasia"
              label="Nome Fantasia*"
              variant="outlined"
              sx={{ width: '100%' }}
              value={formState.nomeFantasia}
              onChange={handleChange}
            />
          </div>

          <div className='form-client-container-body-address'>
            <div className='form-client-container-body-address-title'>
              <h2>Endereço</h2>
            </div>

            <div className='form-client-container-body-address-inputs'>
              <TextField
                id="cep"
                label="CEP"
                variant="outlined"
                sx={{ width: '100%' }}
                value={formState.cep}
                onChange={handleCepChange}
              />
              <TextField
                id="logradouro"
                label="Logradouro"
                variant="outlined"
                sx={{ width: '100%' }}
                value={formState.logradouro}
                onChange={handleChange}
              />
              <TextField
                id="cidade"
                label="Cidade"
                variant="outlined"
                sx={{ width: '100%' }}
                value={formState.cidade}
                onChange={handleChange}
              />
              <TextField
                id="estado"
                label="Estado"
                variant="outlined"
                sx={{ width: '100%' }}
                value={formState.estado}
                onChange={handleChange}
              />
              <TextField
                id="bairro"
                label="Bairro"
                variant="outlined"
                sx={{ width: '100%' }}
                value={formState.bairro}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='form-client-container-body-contacts'>
            <div className='form-client-container-body-contacts-title'>
              <h2>Contatos</h2>
            </div>

            <div className='form-client-container-body-contacts-inputs'>
              <TextField
                id="nomeResponsavel"
                label="Nome do responsavel"
                variant="outlined"
                sx={{ width: '100%' }}
                value={formState.nomeResponsavel}
                onChange={handleChange}
              />
              <TextField
                id="emailResponsavel"
                label="Email do responsavel"
                variant="outlined"
                sx={{ width: '100%' }}
                value={formState.emailResponsavel}
                onChange={handleChange}
              />
              <TextField
                id="celular"
                label="Celular"
                variant="outlined"
                sx={{ width: '100%' }}
                value={phoneMask(formState.celular)}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='form-client-container-body-footer'>
            <button className='button-system voltar' onClick={handleBackNav}>Voltar</button>
            <button className='button-system aceitar' onClick={handleSubmit}>Criar Cliente</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormClient;
