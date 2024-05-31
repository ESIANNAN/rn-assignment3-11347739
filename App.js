import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Hello , Devs!</Text>
      <Text style={styles.smalltext}>14 tasks today</Text>
      <TextInput 
        style={styles.textInput}
        placeholder='Search'
      />
      <Text style={styles.categories}>Categories</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    paddingTop: 52,
    paddingLeft: 20, 
  },
 text: {
    fontSize: 30,
  },
  textInput:{
    width:246,
    height:50,
    borderWidth:1,
    marginTop:38,
    backgroundColor:'#FBF9F7',
    borderRadius:10,
  },
    categories:{
    fontSize: 20,
    marginTop:25,
  },
  

});
