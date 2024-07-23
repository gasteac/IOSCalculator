import { View, Text, StyleSheet } from 'react-native'
import { appTheme } from '../../config/theme/app-theme'
export const CalculatorScreen = () => {
    return (
        <View style={appTheme.calculatorContainer}>
            <View style={{paddingHorizontal:10, paddingBottom:20}}>
                <Text style={appTheme.mainResult}>1500</Text>
                <Text style={appTheme.subResult}>15</Text>
            </View>
        </View>
    )
}
