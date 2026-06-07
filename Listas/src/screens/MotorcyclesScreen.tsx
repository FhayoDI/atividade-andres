  import { SectionList, Text, View, StyleSheet, StatusBar } from 'react-native';
import motorcycles from '../../mocks/motorcycles.json';
import { agruparPorCategoria } from '../helpers/groupMotorcycles';

const secoes = agruparPorCategoria(motorcycles);

export default function MotorcyclesScreen() {
  return (
    <SectionList
      sections={secoes}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.modelo}>{item.model}</Text>
          <View style={styles.rodape}>
            <Text style={styles.marca}>{item.brand}</Text>
            <Text style={styles.ano}>{item.year}</Text>
          </View>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.cabecalho}>{title}</Text>
      )}
      renderSectionFooter={({ section: { data } }) => (
        <Text style={styles.totalSecao}>Total: {data.length} motocicletas</Text>
      )}
      contentContainerStyle={styles.lista}
      stickySectionHeadersEnabled
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingTop: (StatusBar.currentHeight ?? 44) + 8,
    paddingBottom: 32,
  },
  cabecalho: {
    backgroundColor: '#1a1a2e',
    color: '#e0e0ff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    paddingHorizontal: 16,
    paddingVertical: 10,
    textTransform: 'uppercase',
  },
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modelo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marca: {
    fontSize: 13,
    color: '#666',
  },
  ano: {
    fontSize: 13,
    color: '#999',
    fontWeight: '500',
  },
  totalSecao: {
    backgroundColor: '#f5f5fa',
    color: '#888',
    fontSize: 12,
    fontStyle: 'italic',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 4,
    borderBottomColor: '#1a1a2e',
  },
});
