import { Text, TextInput, View } from 'react-native';
import {
  ScreenWrapperFullscreen,
  ScreenWrapperScrollable,
} from './components/screen-wrappers';

// ─── Teste 1: Fullscreen centralizado (ex: tela de login) ───
// export default function App() {
//   return (
//     <ScreenWrapperFullscreen center padding={32} gap={16}>
//       <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Estação Cisne</Text>
//       <TextInput placeholder="Usuário" style={inputStyle} />
//       <TextInput placeholder="Senha" secureTextEntry style={inputStyle} />
//     </ScreenWrapperFullscreen> 
//   );
// }

// ─── Teste 2: Scrollable com lista e pull-to-refresh ───
export default function App() {
  async function  buscarDados() {
    await new Promise(r => setTimeout(r , 1500)); // simula requisição
  }
  return (
    <ScreenWrapperScrollable gap={12} onRefresh={buscarDados}>
      {Array.from({ length: 15 }, (_, i) => (
        <View key={i} style={cardStyle}>
          <Text>Sobrevivente #{i + 1}</Text>
        </View>
      ))}
    </ScreenWrapperScrollable>
  );
}

const inputStyle = { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, width: '100%' } as const;
const cardStyle  = { padding: 16, backgroundColor: 'rgb(233, 214, 214)', borderRadius: 8 } as const;