// src/hooks/useFormClient.ts
import { useState } from 'react';
import { cepInfosType, requestCEPInfos } from '../../services/viacep.service';
import { cepMask } from '../../utils/inputMasks/cepMask';
import { useNavigate } from 'react-router-dom';

interface FormClientState {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  logradouro: string;
  cidade: string;
  estado: string;
  cep: string;
  bairro: string;
  nomeResponsavel: string;
  emailResponsavel: string;
  celular: string;
}

const useFormClient = () => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState<FormClientState>({
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    logradouro: '',
    cidade: '',
    estado: '',
    cep: '',
    bairro: '',
    nomeResponsavel: '',
    emailResponsavel: '',
    celular: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value;
    const maskedCep = cepMask(newCep);

    setFormState((prevState) => ({
      ...prevState,
      cep: maskedCep,
    }));

    if (maskedCep.length === 9) {
      const cepInfos: cepInfosType | undefined = await requestCEPInfos(maskedCep);

      if (cepInfos) {
        setFormState((prevState) => ({
          ...prevState,
          logradouro: cepInfos.logradouro,
          cidade: cepInfos.localidade,
          estado: cepInfos.uf,
          bairro: cepInfos.bairro
        }));
      }
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleBackNav = () => {
    navigate('/listclients')
  }

  return {
    formState,
    handleChange,
    handleCepChange,
    handleSubmit,
    handleBackNav
  };
};

export default useFormClient;
