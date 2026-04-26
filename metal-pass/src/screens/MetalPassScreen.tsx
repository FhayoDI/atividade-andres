import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
} from 'react-native';
import { ScreenWrapper } from '../components/screen-wrappers';
import { FormInput } from '../components/FormInput';
import { FormButton } from '../components/FormButton';
import { colors } from '../theme/colors';

type FormErrors = {
  nickname: string;
  email: string;
  senha: string;
  cidade: string;
};

export default function MetalPassScreen() {
  const [sistemaPronto, setSistemaPronto] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cidade, setCidade] = useState('');
  const [aceitaTermos, setAceitaTermos] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    nickname: '',
    email: '',
    senha: '',
    cidade: '',
  });
  const [podeSubmeter, setPodeSubmeter] = useState(false);

  // Requisito 2 — useEffect de ciclo de vida (loading 2s)
  useEffect(() => {
    console.log('Sistema iniciando...');
    const timer = setTimeout(() => {
      setSistemaPronto(true);
      console.log('Sistema Carregado...');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Requisito 9 — useEffect monitorando campos para habilitar botão
  useEffect(() => {
    const nicknameOk = nickname.trim().length >= 2;
    const emailOk = email.includes('@') && email.includes('.');
    const senhaOk = senha.length >= 8;
    const cidadeOk = cidade.trim().length >= 2;
    setPodeSubmeter(nicknameOk && emailOk && senhaOk && cidadeOk && aceitaTermos);
  }, [nickname, email, senha, cidade, aceitaTermos]);

  function validarNickname(valor: string) {
    setNickname(valor);
    setErrors((prev) => ({
      ...prev,
      nickname:
        valor.length > 0 && valor.trim().length < 2
          ? 'Mínimo 2 caracteres'
          : '',
    }));
  }

  function validarEmail(valor: string) {
    setEmail(valor);
    setErrors((prev) => ({
      ...prev,
      email:
        valor.length > 0 && (!valor.includes('@') || !valor.includes('.'))
          ? 'E-mail inválido'
          : '',
    }));
  }

  function validarSenha(valor: string) {
    setSenha(valor);
    setErrors((prev) => ({
      ...prev,
      senha:
        valor.length > 0 && valor.length < 8
          ? 'Mínimo 8 caracteres'
          : '',
    }));
  }

  function validarCidade(valor: string) {
    setCidade(valor);
    setErrors((prev) => ({
      ...prev,
      cidade:
        valor.length > 0 && valor.trim().length < 2
          ? 'Campo obrigatório'
          : '',
    }));
  }

  // Requisito 10 — log ao submeter
  function handleSubmit() {
    console.log('===== PAINKILLER PASS — SUBMIT =====');
    console.log('Nickname:', nickname);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
    console.log('Cidade:', cidade);
    console.log('Termos aceitos:', aceitaTermos);
    console.log('====================================');
  }

  return (
    <ScreenWrapper>

      {/* Requisito 2 — banner de loading */}
      {!sistemaPronto && (
        <View style={styles.loadingBanner}>
          <Text style={styles.loadingText}>Sistema Carregado...</Text>
        </View>
      )}

      {/* Requisito 3 — Identidade visual com Image */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://img.icons8.com/fluency/200/lightning-bolt.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.bandName}>METAL PASS</Text>
        <Text style={styles.bandName}>EDIÇÃO</Text>
        <Text style={styles.albumName}>PAINKILLER</Text>
        <Text style={styles.appSubtitle}>Cadastro de Acesso</Text>
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerDot} />
          <View style={styles.dividerLine} />
        </View>
      </View>

      {/* Requisitos 4, 5, 6 */}
      <FormInput
        label="Nickname"
        placeholder="Como você é conhecido"
        value={nickname}
        onChangeText={validarNickname}
        error={errors.nickname}
        autoCapitalize="none"
      />

      <FormInput
        label="E-mail"
        placeholder="seu@email.com"
        value={email}
        onChangeText={validarEmail}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        label="Senha"
        placeholder="Mínimo 8 caracteres"
        value={senha}
        onChangeText={validarSenha}
        error={errors.senha}
        secureTextEntry
      />

      <FormInput
        label="Cidade"
        placeholder="Sua cidade"
        value={cidade}
        onChangeText={validarCidade}
        error={errors.cidade}
      />

      {/* Requisito 7 — Switch */}
      <View style={styles.switchRow}>
        <View style={styles.switchTexts}>
          <Text style={styles.switchLabel}>Aceitar os termos de uso</Text>
          <Text style={styles.switchDesc}>
            Li e aceito os termos e a política de privacidade
          </Text>
        </View>
        <Switch
          value={aceitaTermos}
          onValueChange={setAceitaTermos}
          thumbColor={aceitaTermos ? colors.switchThumb : colors.textMuted}
          trackColor={{
            false: colors.switchTrackOff,
            true: colors.switchTrackOn,
          }}
        />
      </View>

      {/* Requisitos 8 + 9 */}
      <FormButton
        title="Criar Conta"
        onPress={handleSubmit}
        disabled={!podeSubmeter}
      />

      {!podeSubmeter && sistemaPronto && (
        <Text style={styles.hint}>
          Preencha todos os campos para continuar
        </Text>
      )}

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  loadingBanner: {
    backgroundColor: colors.primaryGlow,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
  },
  loadingText: {
    color: colors.primary,
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 13,
  },
  header: {
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 10,
  },
  bandName: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSecondary,
    letterSpacing: 5,
  },
  albumName: {
    fontSize: 34,
    fontWeight: '900',
    color: colors.primary,
    letterSpacing: 4,
  },
  appSubtitle: {
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 1,
    marginTop: 2,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceRaised,
    borderRadius: 6,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  switchTexts: {
    flex: 1,
    gap: 3,
  },
  switchLabel: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  switchDesc: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  hint: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 12,
    marginTop: -8,
  },
});
