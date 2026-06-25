import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const { user } = useLocalSearchParams<{ user?: string }>();
  const isSocio = !!user;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{isSocio ? '🎟️' : '🎬'}</Text>
        {isSocio ? (
          <>
            <Text style={styles.titulo}>Bem-vindo, {user}!</Text>
            <Text style={styles.promo}>Hoje tem promoção para sócios!</Text>
            <Text style={styles.preco}>Ingresso R$10,00</Text>
          </>
        ) : (
          <>
            <Text style={styles.titulo}>Bem-vindo ao Clube de Cinema!</Text>
            <Text style={styles.preco}>Ingresso R$20,00</Text>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.voltarBotao} onPress={() => router.back()}>
        <Text style={styles.voltarTexto}>← Voltar</Text>
      </TouchableOpacity>
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
    gap: 32,
  },
  card: {
    width: '100%',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  emoji: { fontSize: 52 },
  titulo: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  promo: {
    fontSize: 14,
    color: '#2ECC71',
    fontWeight: '600',
  },
  preco: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFD700',
    marginTop: 8,
  },
  voltarBotao: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  voltarTexto: {
    color: '#888',
    fontWeight: '600',
    fontSize: 15,
  },
});
