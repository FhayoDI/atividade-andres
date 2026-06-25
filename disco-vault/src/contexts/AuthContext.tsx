import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { definirToken } from '../services/api';
import { entrar, Usuario } from '../services/auth';

type AuthContextProps = {
  usuario: Usuario | null;
  token: string | null;
  carregando: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Chaves usadas no Async Storage para persistir a sessão.
const CHAVE_TOKEN = '@discovault:token';
const CHAVE_USUARIO = '@discovault:usuario';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  // Começa carregando porque precisamos ler o Async Storage antes de decidir a rota.
  const [carregando, setCarregando] = useState(true);

  // Ao abrir o app, tenta recuperar a sessão salva localmente.
  useEffect(() => {
    async function recuperarSessao() {
      const tokenSalvo = await AsyncStorage.getItem(CHAVE_TOKEN);
      const usuarioSalvo = await AsyncStorage.getItem(CHAVE_USUARIO);

      if (tokenSalvo && usuarioSalvo) {
        definirToken(tokenSalvo);
        setToken(tokenSalvo);
        setUsuario(JSON.parse(usuarioSalvo));
      }

      setCarregando(false);
    }

    recuperarSessao();
  }, []);

  async function login(email: string, senha: string) {
    const resposta = await entrar(email, senha);

    // Guarda o token para as próximas requisições e persiste a sessão.
    definirToken(resposta.token);
    await AsyncStorage.setItem(CHAVE_TOKEN, resposta.token);
    await AsyncStorage.setItem(CHAVE_USUARIO, JSON.stringify(resposta.record));

    setToken(resposta.token);
    setUsuario(resposta.record);
  }

  async function logout() {
    definirToken(null);
    await AsyncStorage.removeItem(CHAVE_TOKEN);
    await AsyncStorage.removeItem(CHAVE_USUARIO);

    setToken(null);
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, token, carregando, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
