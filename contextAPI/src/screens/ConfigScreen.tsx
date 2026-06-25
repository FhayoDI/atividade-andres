import { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ScreenWrapperScrollable } from '../components/screen-wrappers';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { useTheme } from '../contexts/ThemeContext';

export default function ConfigScreen() {
  const { theme, colors, toggleTheme } = useTheme();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ScreenWrapperScrollable padding={24} gap={20}>
      <View style={styles.header}>
        <Text style={[styles.titulo, { color: colors.text }]}>Configurações</Text>
        <Text style={[styles.subtitulo, { color: colors.label }]}>Preferências da conta</Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}>
        <Text style={[styles.cardTitulo, { color: colors.text }]}>Tema do Aplicativo</Text>
        <View style={styles.switchLinha}>
          <Text style={[styles.switchTexto, { color: colors.text }]}>
            {theme === 'dark' ? 'Modo Escuro' : 'Modo Claro'}
          </Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{ false: '#CCCCCC', true: '#1a6fff' }}
            thumbColor={theme === 'dark' ? '#FFFFFF' : '#F4F3F4'}
          />
        </View>
      </View>

      <FormInput
        label="NOME"
        placeholder="Seu nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <FormInput
        label="E-MAIL"
        placeholder="seu@email.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormButton
        title="SALVAR CONFIGURAÇÕES"
        onPress={() => console.log('salvo!')}
        disabled={nome.length === 0 || email.length === 0}
      />
    </ScreenWrapperScrollable>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', marginBottom: 8 },
  titulo: { fontSize: 28, fontWeight: '900', letterSpacing: 2 },
  subtitulo: { fontSize: 13, letterSpacing: 1, marginTop: 4 },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    gap: 12,
  },
  cardTitulo: { fontSize: 16, fontWeight: '700' },
  switchLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchTexto: { fontSize: 14, fontWeight: '600' },
});
