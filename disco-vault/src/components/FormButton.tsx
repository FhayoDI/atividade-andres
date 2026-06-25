import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { cores } from '../constants/cores';

type Props = {
  titulo: string;
  onPress: () => void;
  carregando?: boolean;
  variante?: 'primario' | 'perigo';
};

// Botão padrão dos formulários. Mostra um spinner quando "carregando".
export default function FormButton({ titulo, onPress, carregando, variante = 'primario' }: Props) {
  const estiloVariante = variante === 'perigo' ? styles.perigo : styles.primario;

  return (
    <TouchableOpacity
      style={[styles.botao, estiloVariante]}
      onPress={onPress}
      disabled={carregando}
      activeOpacity={0.8}
    >
      {carregando ? (
        <ActivityIndicator color={cores.fundo} />
      ) : (
        <Text style={styles.texto}>{titulo}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 54,
  },
  primario: {
    backgroundColor: cores.dourado,
  },
  perigo: {
    backgroundColor: cores.vermelho,
  },
  texto: {
    color: cores.fundo,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
