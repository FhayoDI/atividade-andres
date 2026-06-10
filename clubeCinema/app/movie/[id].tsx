import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FILMES = [
  { id: '0', nome: 'Interestelar' },
  { id: '1', nome: 'A Origem' },
  { id: '2', nome: 'Batman: O Cavaleiro das Trevas' },
  { id: '3', nome: 'O Poderoso Chefão' },
  { id: '4', nome: 'Pulp Fiction' },
  { id: '5', nome: 'Forrest Gump' },
  { id: '6', nome: 'Matrix' },
  { id: '7', nome: 'O Senhor dos Anéis' },
  { id: '8', nome: 'Star Wars: O Império Contra-Ataca' },
  { id: '9', nome: 'Clube da Luta' },
];

export default function MovieDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const filme = FILMES.find(f => f.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🎥</Text>
        <Text style={styles.label}>Exibindo detalhes do filme:</Text>
        <Text style={styles.nome}>{filme?.nome ?? 'Filme não encontrado'}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>ID #{id}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.voltarBotao} onPress={() => router.back()}>
        <Text style={styles.voltarTexto}>← Voltar para Home</Text>
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
    borderColor: '#3A7BFF',
  },
  emoji: { fontSize: 52 },
  label: { fontSize: 13, color: '#888', letterSpacing: 1, textTransform: 'uppercase' },
  nome: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  badge: {
    backgroundColor: '#3A7BFF22',
    borderWidth: 1,
    borderColor: '#3A7BFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  badgeTexto: { color: '#3A7BFF', fontWeight: '700', fontSize: 13 },
  voltarBotao: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  voltarTexto: { color: '#888', fontWeight: '600', fontSize: 15 },
});
