import { SafeAreaProvider } from 'react-native-safe-area-context';
import GitHubProfileScreen from './src/components/GitHubProfileScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <GitHubProfileScreen />
    </SafeAreaProvider>
  );
}
