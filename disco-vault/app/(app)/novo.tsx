import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormularioDisco from '../../src/components/FormularioDisco';
import ScreenWrapper from '../../src/components/ScreenWrapper';
import { cores } from '../../src/constants/cores';
import { alerta } from '../../src/helpers/alerta';
import { criarDisco, DadosDisco } from '../../src/services/discos';

export default function NovoDisco() {
  const router = useRouter();
  const [carregando, setCarregando] = useState(false);

  async function salvar(dados: DadosDisco) {
    setCarregando(true);
    try {
      await criarDisco(dados);
      router.back();
    } catch {
      alerta('Erro ao salvar', 'Não foi possível criar o disco. Verifique a conexão.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScreenWrapper rolavel>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Novo Disco</Text>
      </View>

      <FormularioDisco
        valoresIniciais={{ album: '', banda: '', ano: 0, genero: '', nota: 0 }}
        textoBotao="SALVAR DISCO"
        carregando={carregando}
        onSalvar={salvar}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    gap: 8,
    marginBottom: 8,
  },
  voltar: {
    color: cores.textoFraco,
    fontSize: 14,
    fontWeight: '600',
  },
  titulo: {
    color: cores.texto,
    fontSize: 26,
    fontWeight: '900',
  },
});
