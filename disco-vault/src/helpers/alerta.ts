import { Alert, Platform } from 'react-native';

// Alerta que funciona tanto no app nativo quanto no Expo Web.
// (O Alert.alert do react-native não funciona no navegador, por isso o desvio.)
export function alerta(titulo: string, mensagem: string) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensagem}`);
  } else {
    Alert.alert(titulo, mensagem);
  }
}
