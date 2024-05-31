import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
<ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
       <Text style={styles.text}>Hello , Devs!</Text>
      <Text style={styles.smalltext}>14 tasks today</Text>
      <TextInput 
        style={styles.textInput}
        placeholder='Search'
      />
      <Text style={styles.categories}>Categories</Text>
          
  <ScrollView horizontal style={ styles.scrollview}>
      <View style={styles.slide}>
          <Text style={styles.activities}>Exercise</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Study</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Code</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Cook</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Self-care</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Travel</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Relaxation & Leisure</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Socialize</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.activities}>Research</Text>
        </View>        
</ScrollView>
<Text style={styles.categories}>Ongoing Task</Text>

          
      <StatusBar style="auto" />
    </View>
 </ScrollView>
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
   activities:{
    width:150,
    borderWidth:2,
    marginRight:15,
    width:150,
    height:150,
    borderRadius:15,
    padding: 15,
    paddingTop:18,
  },
  ongoingtask:{
    fontSize:20,
    marginTop:20,
  }
  
  

});
