import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormButton from '../../src/components/FormButton';
import FormInput from '../../src/components/FormInput';
import ScreenWrapper from '../../src/components/ScreenWrapper';
import { cores } from '../../src/constants/cores';
import { useAuth } from '../../src/contexts/AuthContext';
import { alerta } from '../../src/helpers/alerta';
import { validarEmail } from '../../src/helpers/validacao';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function entrarNoApp() {
    if (!validarEmail(email)) {
      alerta('E-mail inválido', 'Digite um e-mail no formato correto.');
      return;
    }
    if (!senha) {
      alerta('Senha obrigatória', 'Digite sua senha para continuar.');
      return;
    }

    setCarregando(true);
    try {
      await login(email, senha);
    } catch {
      alerta('Falha no login', 'E-mail ou senha incorretos, ou servidor indisponível.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScreenWrapper>
      <View style={styles.cabecalho}>
        <Text style={styles.logo}>🤘</Text>
        <Text style={styles.titulo}>HEADBANGERS VAULT</Text>
        <Text style={styles.subtitulo}>Sua coleção de discos de metal</Text>
      </View>

      <FormInput
        label="E-MAIL"
        value={email}
        onChangeText={setEmail}
        placeholder="usuario@email.com"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <FormInput
        label="SENHA"
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <FormButton titulo="ENTRAR" onPress={entrarNoApp} carregando={carregando} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    alignItems: 'center',
    gap: 6,
    marginVertical: 40,
  },
  logo: {
    fontSize: 56,
  },
  titulo: {
    color: cores.dourado,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
  },
  subtitulo: {
    color: cores.textoFraco,
    fontSize: 13,
  },
});
