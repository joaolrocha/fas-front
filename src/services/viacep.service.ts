import axios from 'axios';

async function createService() {
  const baseURL = "https://viacep.com.br/ws/";
  return axios.create({ baseURL });
}

const servicePromise = createService();

export type cepInfosType = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
};

export async function requestCEPInfos(cep: string): Promise<cepInfosType | undefined> {
  try {
    const service = await servicePromise;
    const { data } = await service.get(`${cep}/json`);
    if (data && data.cep) return data;
  } catch (error) {
    console.error(error);
  }
}