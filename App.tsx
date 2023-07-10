//import { StatusBar } from 'expo-status-bar';//serve para mudar o statusbar do celular
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SymbolOn from './assets/pictures/symbol-on.png';
import SymbolOff from './assets/pictures/symbol-off.png';

export default function App() {
   const[isActive, setIsActive] = useState(false)
function handleSymbol()
{
  setIsActive((oldValue:boolean) =>
  {
    return !oldValue
  })
}
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      {/* faz ser sensivel ao toque tudo oq estiver */}
      <TouchableOpacity onPress={handleSymbol}>
    <Image source={isActive ? SymbolOn : SymbolOff} />
    </TouchableOpacity>
    </View>
  );
}

const styles2 = StyleSheet.create(
{
  titleStyle: //classe em css
  {
    fontSize: 50,
    color: '#b99898'

  }
}

)

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#1c262a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff:
  {
    flex:1,
    backgroundColor: '#585858',
    alignItems: 'center',
    justifyContent: 'center',

  }
});
