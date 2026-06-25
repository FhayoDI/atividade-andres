import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { cores } from '../constants/cores';

type Props = {
  children: React.ReactNode;
  rolavel?: boolean;
};

// Moldura padrão das telas: fundo escuro, área segura e barra de status clara.
export default function ScreenWrapper({ children, rolavel = false }: Props) {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar style="light" />
      {rolavel ? (
        <ScrollView contentContainerStyle={[styles.conteudo, styles.crescer]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.conteudo, styles.fixo]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    padding: 20,
    gap: 16,
  },
  // Tela com lista (FlatList): altura presa à tela, pra a lista rolar por dentro.
  fixo: {
    flex: 1,
  },
  // Tela com ScrollView: o conteúdo pode crescer além da tela e rolar.
  crescer: {
    flexGrow: 1,
  },
});
