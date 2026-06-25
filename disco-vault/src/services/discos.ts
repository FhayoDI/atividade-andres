import { api } from './api';

export type Disco = {
  id: string;
  album: string;
  banda: string;
  ano: number;
  genero: string;
  nota: number;
};

export type DadosDisco = Omit<Disco, 'id'>;

export async function listarDiscos(): Promise<Disco[]> {
  const resposta = await api.get('/api/collections/discos/records');
  return resposta.data.items;
}

export async function buscarDisco(id: string): Promise<Disco> {
  const resposta = await api.get(`/api/collections/discos/records/${id}`);
  return resposta.data;
}

export async function criarDisco(dados: DadosDisco): Promise<Disco> {
  const resposta = await api.post('/api/collections/discos/records', dados);
  return resposta.data;
}

export async function atualizarDisco(id: string, dados: DadosDisco): Promise<Disco> {
  const resposta = await api.patch(`/api/collections/discos/records/${id}`, dados);
  return resposta.data;
}

export async function removerDisco(id: string): Promise<void> {
  await api.delete(`/api/collections/discos/records/${id}`);
}
