import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, RefreshControl } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  padding?: number;
  gap?: number;
  onRefresh?: () => Promise<void>;
};

export function ScreenWrapperScrollable({ children, padding = 20, gap, onRefresh }: Props) {
  const [refreshing, setRefreshing] = useState(false);

  async function handleRefresh() {
    if (!onRefresh) return;
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ padding, gap }}
        refreshControl={
          onRefresh
            ? <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            : undefined
        }
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}