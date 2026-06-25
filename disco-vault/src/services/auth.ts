import { api } from './api';

export type Usuario = {
  id: string;
  email: string;
  name: string;
};

type RespostaLogin = {
  token: string;
  record: Usuario;
};

// Autentica na collection "users" do PocketBase e devolve o token + dados do usuário.
export async function entrar(email: string, senha: string): Promise<RespostaLogin> {
  const resposta = await api.post('/api/collections/users/auth-with-password', {
    identity: email,
    password: senha,
  });

  return {
    token: resposta.data.token,
    record: resposta.data.record,
  };
}
