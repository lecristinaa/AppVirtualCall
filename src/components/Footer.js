
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { heightTela, widthTela } from '../constants/dimensions'

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.footerButton}>
          <Text style={styles.footerButtonText}> Home </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Salas')} style={styles.footerButton}>
          <Text style={styles.footerButtonText}> Salas </Text>
        </TouchableOpacity>

      </View>
  )
}



const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f39873',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    footerButton: {
        padding: 10,
        borderRadius: 5,
    },
    footerButtonText: {
        fontSize: 16,
        color: '#ffff',
    },
})