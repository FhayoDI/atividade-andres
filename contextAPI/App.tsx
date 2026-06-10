import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/contexts/ThemeContext';
import ConfigScreen from './src/screens/ConfigScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ConfigScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
