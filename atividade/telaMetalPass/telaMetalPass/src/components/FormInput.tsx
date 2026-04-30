import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

type Props = TextInputProps & {
  label: string;
  error?: string;
};

export default function FormInput({ label, error, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.inputErro : null]}
        placeholderTextColor="#394d6d"
        {...rest}
      />
      {error ? <Text style={styles.erro}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#7a90b5',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#0d1526',
    borderWidth: 1.5,
    borderColor: '#1a2540',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    color: '#e8edf5',
  },
  inputErro: {
    borderColor: '#ff3d3d',
  },
  erro: {
    color: '#ff3d3d',
    fontSize: 12,
  },
});
