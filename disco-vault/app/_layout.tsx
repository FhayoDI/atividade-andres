import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { cores } from '../src/constants/cores';
import { AuthProvider, useAuth } from '../src/contexts/AuthContext';

// Decide para qual fluxo mandar o usuário com base no token.
function Navegacao() {
  const { token, carregando } = useAuth();
  const segmentos = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Enquanto lê o Async Storage, não redireciona nada.
    if (carregando) return;

    const noFluxoAuth = segmentos[0] === '(auth)';

    if (!token && !noFluxoAuth) {
      // Sem token tentando acessar área restrita -> vai pro login.
      router.replace('/login');
    } else if (token && noFluxoAuth) {
      // Já logado na tela de login -> vai pra área restrita.
      router.replace('/');
    }
  }, [token, carregando, segmentos]);

  // Tela de carregamento enquanto a sessão salva é recuperada.
  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" color={cores.dourado} />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: cores.fundo } }} />;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navegacao />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  carregando: {
    flex: 1,
    backgroundColor: cores.fundo,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
