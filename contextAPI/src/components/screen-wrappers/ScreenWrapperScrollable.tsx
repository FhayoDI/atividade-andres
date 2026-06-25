import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../contexts/ThemeContext';

type Props = {
  children: React.ReactNode;
  padding?: number;
  gap?: number;
};

export function ScreenWrapperScrollable({ children, padding = 20, gap }: Props) {
  const { colors, theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <ScrollView contentContainerStyle={{ padding, gap }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
