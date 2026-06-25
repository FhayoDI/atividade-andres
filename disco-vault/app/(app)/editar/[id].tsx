import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormularioDisco from '../../../src/components/FormularioDisco';
import ScreenWrapper from '../../../src/components/ScreenWrapper';
import { cores } from '../../../src/constants/cores';
import { alerta } from '../../../src/helpers/alerta';
import { atualizarDisco, buscarDisco, DadosDisco, Disco } from '../../../src/services/discos';

export default function EditarDisco() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [disco, setDisco] = useState<Disco | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  // Busca os dados atuais do disco para preencher o formulário.
  useEffect(() => {
    async function carregar() {
      try {
        const encontrado = await buscarDisco(id);
        setDisco(encontrado);
      } catch {
        alerta('Erro ao carregar', 'Não foi possível buscar o disco.');
        router.back();
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, [id]);

  async function salvar(dados: DadosDisco) {
    setSalvando(true);
    try {
      await atualizarDisco(id, dados);
      router.back();
    } catch {
      alerta('Erro ao salvar', 'Não foi possível atualizar o disco.');
    } finally {
      setSalvando(false);
    }
  }

  return (
    <ScreenWrapper rolavel>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Editar Disco</Text>
      </View>

      {carregando || !disco ? (
        <ActivityIndicator size="large" color={cores.dourado} style={styles.spinner} />
      ) : (
        <FormularioDisco
          valoresIniciais={{
            album: disco.album,
            banda: disco.banda,
            ano: disco.ano,
            genero: disco.genero,
            nota: disco.nota,
          }}
          textoBotao="SALVAR ALTERAÇÕES"
          carregando={salvando}
          onSalvar={salvar}
        />
      )}
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
  spinner: {
    marginTop: 40,
  },
});
