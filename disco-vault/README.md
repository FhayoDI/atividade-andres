# 🤘 Headbangers Vault

Aplicativo móvel (CRUD completo) para catalogar sua coleção de discos de metal,
desenvolvido em **React Native + Expo** com **TypeScript** e integrado a uma API
REST (**PocketBase**). Projeto da **Prática de Implementação 2**.

## Como rodar

### 1. Suba o servidor (PocketBase)

Descompacte o `pocketbase.zip` e, dentro da pasta `pocketbase`, rode:

```bash
./pocketbase serve
```

O servidor sobe em `http://127.0.0.1:8090`. O painel admin fica em
`http://127.0.0.1:8090/_/` (credenciais em `pocketbase/CREDENCIAIS.txt`).

### 2. Rode o app

```bash
npm install
npm run web      # roda no navegador (Expo Web)
# ou: npm run android / npm run ios
```

> **Celular/emulador:** em `src/services/api.ts`, troque o IP `192.168.0.10`
> pelo IP da sua máquina na rede local (no Expo Web já usa `localhost`).

### 3. Rode os testes

```bash
npm test
```

## Login de teste

| E-mail                 | Senha       |
|------------------------|-------------|
| `headbanger@vault.com` | `metal1234` |

## Estrutura

```
app/                      → rotas (Expo Router)
  _layout.tsx             → AuthProvider + guarda de rota (auth x restrito)
  (auth)/login.tsx        → fluxo público (login)
  (app)/                  → fluxo restrito (só com token)
    index.tsx             → lista de discos (FlatList)
    novo.tsx              → criar disco
    editar/[id].tsx       → editar disco
src/
  contexts/AuthContext.tsx  → token, login/logout, Async Storage
  services/                 → api (Axios), auth, discos (CRUD)
  components/               → ScreenWrapper, FormInput, FormButton, DiscoCard, FormularioDisco
  helpers/                  → validação (funções puras) e alerta cross-platform
  constants/cores.ts        → paleta da identidade visual
__tests__/                → testes unitários (Jest)
```

## Requisitos atendidos

1. **Expo Router** — fluxos `(auth)` (público) e `(app)` (restrito) separados.
2. **Context API** — `AuthContext` guarda usuário/token e provê `login`/`logout`,
   que disparam o redirecionamento de rotas automaticamente.
3. **Async Storage** — token e usuário persistidos; sessão recuperada ao reabrir o app.
4. **GET (Axios)** — `listarDiscos()` busca os registros remotos.
5. **POST/DELETE (Axios)** — `criarDisco()` e `removerDisco()`.
6. **PUT/PATCH (Axios)** — `atualizarDisco()` (PATCH) via formulário de edição.
7. **FlatList** — lista com `keyExtractor` e `ListEmptyComponent` (coleção vazia).
8. **Loading e Erro** — `ActivityIndicator` durante as requisições e `Alert`
   (com fallback de `window.alert` no Expo Web) em caso de falha.
9. **Estilização** — `StyleSheet.create`, Flexbox e estilos separados por componente.
10. **Testes (Jest)** — validação de e-mail, nota, dados do disco e o componente `FormButton`.
