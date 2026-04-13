import { View, Text, StyleSheet } from 'react-native';

type Props = {
  distancia: number;
};

type Zona = {
  texto: string;
  cor: string;
};

export default function SensorWidget({ distancia }: Props) {
  function getZona(): Zona {
    if (distancia < 20) return { texto: '🔴 PERIGO',  cor: '#ff4444' };
    if (distancia < 50) return { texto: '🟡 ATENÇÃO', cor: '#ffaa00' };
    return                     { texto: '🟢 SEGURO',  cor: '#44bb44' };
  }

  const zona = getZona();

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Distância atual</Text>
      <Text style={styles.numero}>{distancia} cm</Text>
      <Text style={[styles.zona, { color: zona.cor }]}>{zona.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  numero: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#222',
  },
  zona: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});