import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function FormButton({ title, onPress, disabled }: Props) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.botao,
        { backgroundColor: disabled ? colors.buttonDisabled : colors.buttonBackground },
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.texto,
          { color: disabled ? colors.buttonDisabledText : colors.buttonText },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  texto: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});
