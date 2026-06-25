import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  distancia: number;
  setDistancia: (valor: number) => void;
};

export default function DistanciaInput({ distancia, setDistancia }: Props) {
  function somar(valor: number): void {
    setDistancia(Math.max(0, distancia + valor));
  }

  function handleTexto(texto: string): void {
    const numero = parseInt(texto);
    if (!isNaN(numero)) setDistancia(numero);
  }

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TouchableOpacity style={styles.btn} onPress={() => somar(-10)}>
          <Text style={styles.btnTexto}>-10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => somar(-1)}>
          <Text style={styles.btnTexto}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => somar(1)}>
          <Text style={styles.btnTexto}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => somar(10)}>
          <Text style={styles.btnTexto}>+10</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(distancia)}
        onChangeText={handleTexto}
        placeholder="Digite a distância em cm"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  btn: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});