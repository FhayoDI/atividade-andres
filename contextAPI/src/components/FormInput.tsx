import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

type Props = TextInputProps & {
  label: string;
  error?: string;
};

export default function FormInput({ label, error, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.label }]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.inputBackground,
            borderColor: error ? '#ff3d3d' : colors.inputBorder,
            color: colors.text,
          },
        ]}
        placeholderTextColor={colors.placeholder}
        {...rest}
      />
      {error ? <Text style={styles.erro}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 6 },
  label: { fontSize: 13, fontWeight: '600', letterSpacing: 1 },
  input: {
    borderWidth: 1.5,
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
  },
  erro: { color: '#ff3d3d', fontSize: 12 },
});
