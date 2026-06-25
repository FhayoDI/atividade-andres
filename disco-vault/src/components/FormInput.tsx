import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { cores } from '../constants/cores';

type Props = TextInputProps & {
  label: string;
};

// Campo de texto rotulado, usado em todos os formulários.
export default function FormInput({ label, ...resto }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={cores.textoApagado}
        {...resto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    color: cores.dourado,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: cores.cartao,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    color: cores.texto,
  },
});
