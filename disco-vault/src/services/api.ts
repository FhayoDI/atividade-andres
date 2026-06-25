import axios from 'axios';
import { Platform } from 'react-native';

// Endereço do servidor PocketBase.
// - No Expo Web o app roda no navegador do PC, então usa localhost.
// - No celular/emulador troque pelo IP da sua máquina na rede (ex: http://192.168.0.10:8090).
const URL_BASE = Platform.OS === 'web' ? 'http://127.0.0.1:8090' : 'http://192.168.3.110:8090';

export const api = axios.create({
  baseURL: URL_BASE,
  // Sem isso, uma requisição sem resposta (servidor fora do ar ou IP errado)
  // fica "carregando" pra sempre. Com timeout ela falha e cai no catch.
  timeout: 10000,
});

// Coloca (ou remove) o token de autenticação em todas as requisições seguintes.
export function definirToken(token: string | null) {
  if (token) {
    api.defaults.headers.common.Authorization = token;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}
