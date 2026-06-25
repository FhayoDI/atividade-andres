import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Props = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export function ScreenWrapperFullscreen({ children, center, padding = 20, gap }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#04080f' }}>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          padding,
          gap,
          justifyContent: center ? 'center' : 'flex-start',
          alignItems: center ? 'center' : 'stretch',
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
