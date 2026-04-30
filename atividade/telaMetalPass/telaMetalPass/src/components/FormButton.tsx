import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function FormButton({ title, onPress, disabled }: Props) {
  return (
    <TouchableOpacity
      style={[styles.botao, disabled ? styles.botaoDesativado : null]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.}
    >
      <Text style={[styles.texto, disabled ? styles.textoDesativado : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#1a6fff',
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoDesativado: {
    backgroundColor: '#151d2c',
    borderWidth: 1,
    borderColor: '#1a2540',
  },
  texto: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  textoDesativado: {
    color: 'rgb(58, 79, 112)',
  },
});
