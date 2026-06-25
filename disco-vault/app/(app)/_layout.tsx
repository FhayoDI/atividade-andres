import { Stack } from 'expo-router';
import { cores } from '../../src/constants/cores';

// Pilha de telas do fluxo restrito (só acessível com token, garantido pelo _layout raiz).
export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: cores.fundo },
      }}
    />
  );
}
