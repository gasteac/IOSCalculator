import {
  StatusBar,
  Text,
  View
} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { appTheme } from './config/theme/app-theme';

function App() {
  return (
    <View style={appTheme.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen/>
    </View>
  );
}

export default App;
