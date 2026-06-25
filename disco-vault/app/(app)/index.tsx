import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DiscoCard from '../../src/components/DiscoCard';
import ScreenWrapper from '../../src/components/ScreenWrapper';
import { cores } from '../../src/constants/cores';
import { useAuth } from '../../src/contexts/AuthContext';
import { alerta } from '../../src/helpers/alerta';
import { Disco, listarDiscos, removerDisco } from '../../src/services/discos';

export default function ListaDiscos() {
  const { usuario, logout } = useAuth();
  const router = useRouter();
  const [discos, setDiscos] = useState<Disco[]>([]);
  const [carregando, setCarregando] = useState(true);


  const carregarDiscos = useCallback(async () => {
    setCarregando(true);
    try {
      const lista = await listarDiscos();
      setDiscos(lista);
    } catch {
      alerta('Erro ao carregar', 'Não foi possível buscar os discos. Verifique a conexão com a internet.');
    } finally {
      setCarregando(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarDiscos();
    }, [carregarDiscos])
  );

  function confirmarRemocao(disco: Disco) {
      removerDiscoNaLista(disco);
  }

  async function removerDiscoNaLista(disco: Disco) {
    try {
      await removerDisco(disco.id);
      setDiscos(atual => atual.filter(d => d.id !== disco.id));
    } catch {
      alerta('Erro ao remover', 'Não foi possível remover o disco.');
    }
  }

  return (
    <ScreenWrapper>
      <View style={styles.topo}>
        <View>
          <Text style={styles.saudacao}>Salve, {usuario?.name} 🤘</Text>
          <Text style={styles.titulo}>Sua Coleção</Text>
        </View>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.sair}>Sair</Text>
        </TouchableOpacity>
      </View>

      {carregando ? (
        <ActivityIndicator size="large" color={cores.dourado} style={styles.spinner} />
      ) : (
        <FlatList
          data={discos}
          keyExtractor={item => item.id}
          style={styles.lista}
          contentContainerStyle={styles.listaConteudo}
          renderItem={({ item }) => (
            <DiscoCard
              disco={item}
              onEditar={() => router.push(`/editar/${item.id}`)}
              onRemover={() => confirmarRemocao(item)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.vazio}>
              <Text style={styles.vazioEmoji}>📀</Text>
              <Text style={styles.vazioTexto}>Sua coleção está vazia.</Text>
              <Text style={styles.vazioDica}>Toque em "+ Novo disco" para começar.</Text>
            </View>
          }
        />
      )}

      <TouchableOpacity style={styles.botaoNovo} onPress={() => router.push('/novo')}>
        <Text style={styles.botaoNovoTexto}>+ Novo disco</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saudacao: {
    color: cores.textoFraco,
    fontSize: 13,
  },
  titulo: {
    color: cores.texto,
    fontSize: 26,
    fontWeight: '900',
  },
  sair: {
    color: cores.vermelho,
    fontSize: 14,
    fontWeight: '700',
  },
  spinner: {
    marginTop: 40,
  },
  lista: {
    flex: 1,
  },
  listaConteudo: {
    gap: 12,
    paddingBottom: 16,
  },
  vazio: {
    alignItems: 'center',
    gap: 8,
    marginTop: 60,
  },
  vazioEmoji: {
    fontSize: 48,
  },
  vazioTexto: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: '700',
  },
  vazioDica: {
    color: cores.textoFraco,
    fontSize: 13,
  },
  botaoNovo: {
    backgroundColor: cores.dourado,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  botaoNovoTexto: {
    color: cores.fundo,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
