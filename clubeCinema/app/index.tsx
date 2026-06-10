import { Link, router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  function entrarComoUsuario() {
    router.push({ pathname: '/home', params: { user: 'Fulano' } });
  }

  function verFilmeAleatorio() {
    const id = Math.floor(Math.random() * 10);
    router.push({ pathname: '/movie/[id]', params: { id: String(id) } });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Clube de Cinema</Text>
      <Text style={styles.subtitulo}>Sua sessão começa aqui</Text>

      <View style={styles.botoes}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Entrar como Convidado</Text>
            <Text style={styles.botaoSubtexto}>via Link</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={[styles.botao, styles.botaoSocio]} onPress={entrarComoUsuario}>
          <Text style={styles.botaoTexto}>Entrar como Usuário Logado</Text>
          <Text style={styles.botaoSubtexto}>via router.push com query param</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoFilme]} onPress={verFilmeAleatorio}>
          <Text style={styles.botaoTexto}>Ver um Filme Aleatório</Text>
          <Text style={styles.botaoSubtexto}>via router.push com route param</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitulo: {
    fontSize: 14,
    color: '#888',
    marginTop: -30,
  },
  botoes: {
    width: '100%',
    gap: 12,
  },
  botao: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    gap: 4,
  },
  botaoSocio: {
    backgroundColor: '#0D2010',
    borderColor: '#2ECC71',
  },
  botaoFilme: {
    backgroundColor: '#0D0D20',
    borderColor: '#3A7BFF',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  botaoSubtexto: {
    color: '#666',
    fontSize: 11,
  },
});
