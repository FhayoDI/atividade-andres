import { useState, useEffect } from 'react';
import { View, Text, Image, Switch, StyleSheet } from 'react-native';
import { ScreenWrapperScrollable } from '../components/screen-wrappers';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function MetalPassScreen() {
  // Estados dos campos
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [pais, setPais] = useState<string>('');
  const [estado,setEstado] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [aceitoTermos, setAceitoTermos] = useState<boolean>(false);

  //  Estados das mensagens de erro
  const [erroNickname, setErroNickname] = useState<string>('');
  const [erroEmail, setErroEmail] = useState<string>('');
  const [erroSenha, setErroSenha] = useState<string>('');
  const [erroPais, setErroPais] = useState<string>('');
  const [erroEstado, setErroEstado] = useState<string>('');
  const [erroCidade, setErroCidade] = useState<string>('');

  // Botão habilitado ou não
  const [botaoAtivo, setBotaoAtivo] = useState<boolean>(false);

  // Aviso "Sistema Carregado..."
  const [carregando, setCarregando] = useState<boolean>(true);

  // useEffect 1 — ciclo de vida (loading 2s)
  useEffect(() => {
    console.log('Sistema iniciando...');

    const timer = setTimeout(() => {
      setCarregando(false);
      console.log('Sistema Carregado');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect 2 — valida campos e habilita/desabilita botão
  useEffect(() => {
    // valida nickname
    if (nickname.length > 0 && nickname.length < 2) {
      setErroNickname('Mínimo 2 caracteres');
    } else {
      setErroNickname('');
    }

    // valida e-mail
    if (email.length > 0 && (!email.includes('@') || !email.includes('.'))) {
      setErroEmail('E-mail inválido');
    } else {
      setErroEmail('');
    }

    // valida senha
    if (senha.length > 0 && senha.length < 8) {
      setErroSenha('Mínimo 8 caracteres');
    } else {
      setErroSenha('');
    }

    // valida pais
    if (pais.length > 0 && cidade.length< 4) {
      setErroPais('Pais com menos de 4 letras não existe!')
    } else {
      setErroPais('');
    }
    // valida Estado
    if (estado.length > 0  && estado.length < 3 ) {
      setErroEstado('O menos estado do mundo tem 3 letras!')
    } else {
      setErroEstado('');
    }

    // valida cidade
    if (cidade.length > 0 && cidade.length < 2) {
      setErroCidade('Cidade inválida');
    } else {
      setErroCidade('');
    }

    // habilita o botão só se tudo estiver válido
    const tudoOk =
      nickname.length >= 2 &&
      email.includes('@') &&
      email.includes('.') &&
      senha.length >= 8 &&
      cidade.length >= 2 &&
      pais.length >= 4 &&
      estado.length >= 3 && 
      cidade.length >= 1 &&
      aceitoTermos;

    setBotaoAtivo(tudoOk);
  }, [nickname, email, senha,pais,estado, cidade, aceitoTermos]);

  // 📤 Submissão do formulário
  function handleSubmit(): void {
    console.log('===== METAL PASS - SUBMIT =====');
    console.log('Nickname:', nickname);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
    console.log('Pais:', pais);
    console.log('Estado', estado);
    console.log('Cidade:', cidade);
    console.log('Termos aceitos:', aceitoTermos);
    console.log('===============================');
  }

  return (
    <ScreenWrapperScrollable padding={24} gap={20}>
      {/*Demora 2 segundo para o sistema carregar*/}
      {carregando && (
        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>Sistema Carregando...</Text>
        </View>
      )}

      {/* Cabeçalho com identidade visual */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/71qMMesuwaL.jpg' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subtitulo}>METAL PASS</Text>
        <Text style={styles.titulo}>PAINKILLER</Text>
        <Text style={styles.tagline}>Cadastro de Acesso</Text>
      </View>

      {/* Campos do formulário */}
      <FormInput
        label="NICKNAME"
        placeholder="Como você é conhecido"
        value={nickname}
        onChangeText={setNickname}
        error={erroNickname}
        autoCapitalize="none"
      />

      <FormInput
        label="E-MAIL"
        placeholder="seu@email.com"
        value={email}
        onChangeText={setEmail}
        error={erroEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        label="SENHA"
        placeholder="Mínimo 8 caracteres"
        value={senha}
        onChangeText={setSenha}
        error={erroSenha}
        secureTextEntry
      />

      <FormInput
        label='PAIS'
        placeholder='Pais que você nasceu!'
        value={pais}
        onChangeText={setPais}
        secureTextEntry
        />

      <FormInput
        label='ESTADO'
        placeholder='Estado que você!'
        value={pais}
        onChangeText={setEstado}
        secureTextEntry
        />

      <FormInput
        label="CIDADE"
        placeholder="Sua cidade"
        value={cidade}
        onChangeText={setCidade}
        error={erroCidade}
      />

      {/* Switch — aceito os termos */}
      <View style={styles.switchLinha}>
        <Text style={styles.switchTexto}>Aceito os termos de uso</Text>
        <Switch
          value={aceitoTermos}
          onValueChange={setAceitoTermos}
          trackColor={{ false: '#1a2540', true: '#1a6fff' }}
        />
      </View>

      {/* Botão de submissão */}
      <FormButton
        title="CRIAR CONTA"
        onPress={handleSubmit}
        disabled={!botaoAtivo}
      />
    </ScreenWrapperScrollable>
  );
}

const styles = StyleSheet.create({
  aviso: {
    backgroundColor: '#0d1526',
    borderWidth: 1,
    borderColor: '#1a6fff',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
  },
  avisoTexto: {
    color: '#1a6fff',
    fontWeight: '700',
    letterSpacing: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 12,
    fontWeight: '700',
    color: '#7a90b5',
    letterSpacing: 5,
  },
  titulo: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1a6fff',
    letterSpacing: 4,
  },
  tagline: {
    fontSize: 11,
    color: '#3a4f70',
    letterSpacing: 1,
    marginTop: 4,
  },
  switchLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0d1526',
    borderWidth: 1,
    borderColor: '#1a2540',
    borderRadius: 6,
    padding: 14,
  },
  switchTexto: {
    color: '#e8edf5',
    fontSize: 14,
    fontWeight: '600',
  },
});
