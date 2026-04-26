import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../theme/colors';
import { FireFooter } from '../FireFooter';

type Props = {
  children: React.ReactNode;
  padding?: number;
  gap?: number;
};

export function ScreenWrapper({ children, padding = 24, gap = 20 }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={[styles.scroll, { padding, gap, paddingBottom: 130 }]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>

      {/* Fogo fixo no rodapé */}
      <View style={styles.fireWrapper} pointerEvents="none">
        <FireFooter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flexGrow: 1,
  },
  fireWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
