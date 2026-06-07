import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SensorScreen from './src/screens/SensorScreen';

export default function App() {
  const [ativo, setAtivo] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      {ativo && <SensorScreen />}
      <TouchableOpacity style={styles.botao} onPress={() => setAtivo(!ativo)}>
        <Text style={styles.botaoTexto}>
          {ativo ? 'Desligar Sensor' : 'Ligar Sensor'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  botao: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    margin: 24,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});