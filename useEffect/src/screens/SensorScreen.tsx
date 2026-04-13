import { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import DistanciaInput from '../components/DistanciaInput';
import SensorWidget from '../components/SensorWidget';

export default function SensorScreen() {
  const [distancia, setDistancia] = useState<number>(100);

  useEffect(() => {
    console.log('📡 Sistema de Sensores Iniciado');

    const intervalo = setInterval(() => {
      console.log('🔄 Sistema vivo...');
    }, 2000);

    return () => {
      clearInterval(intervalo);
      console.log('📴 Sistema de Sensores Desligado');
    };
  }, []);

  useEffect(() => {
    if (distancia < 20) {
      Alert.alert('⚠️ PERIGO: Muito Próximo!');
    }
  }, [distancia]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sensor de Estacionamento</Text>
      <SensorWidget distancia={distancia} />
      <DistanciaInput distancia={distancia} setDistancia={setDistancia} />
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});