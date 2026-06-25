import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { cores } from '../constants/cores';
import { Disco } from '../services/discos';

type Props = {
  disco: Disco;
  onEditar: () => void;
  onRemover: () => void;
};

export default function DiscoCard({ disco, onEditar, onRemover }: Props) {
  return (
    <View style={styles.cartao}>
      <View style={styles.info}>
        <Text style={styles.album}>{disco.album}</Text>
        <Text style={styles.detalhe}>
          {disco.banda} · {disco.ano} · {disco.genero}
        </Text>
        <Text style={styles.nota}>⭐ {disco.nota}/10</Text>
      </View>

      <View style={styles.acoes}>
        <TouchableOpacity style={styles.botaoAcao} onPress={onEditar}>
          <Text style={styles.botaoEditar}>editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoAcao} onPress={onRemover}>
          <Text style={styles.botaoRemover}>excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.cartao,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 10,
    padding: 16,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  album: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: '800',
  },
  detalhe: {
    color: cores.textoFraco,
    fontSize: 13,
  },
  nota: {
    color: cores.dourado,
    fontSize: 13,
    fontWeight: '700',
  },
  acoes: {
    flexDirection: 'row',
    gap: 4,
  },
  botaoAcao: {
    padding: 8,
  },
  botaoEditar: {
    fontSize: 20,
    color:cores.dourado
  },
  botaoRemover: {
    fontSize: 20,
    color: cores.vermelho,
  },
});
