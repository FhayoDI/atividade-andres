import { SafeAreaProvider } from 'react-native-safe-area-context';
import MetalPassScreen from './src/screens/MetalPassScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <MetalPassScreen />
    </SafeAreaProvider>
  );
}
