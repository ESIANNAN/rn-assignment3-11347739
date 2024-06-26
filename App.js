import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, Image } from 'react-native';

export default function App() {
  const tasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web development' },
    { id: '3', title: 'Cooking' },
    { id: '4', title: 'Code' },
    { id: '5', title: 'Studying' },
    { id: '6', title: 'Work out' },
    { id: '7', title: 'Partying' },
    { id: '8', title: 'Jogging' },
    { id: '9', title: 'Laundary' },
    { id: '10', title: 'Grocery shopping' },
    { id: '11', title: 'Music rehearsals' },
    { id: '12', title: 'Piano lessons' },
    { id: '13', title: 'Salon time' },
    { id: '14', title: 'Group studies' },
    { id: '15', title: 'Mid-week service' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Hello, Devs!</Text>
          <Image source={require('./assets/Devsicon.png')} style={styles.icon} />
        </View>
        <Text style={styles.smalltext}>14 tasks today</Text>
        <View style={styles.searchContainer}>
        <Image source={require('./assets/searchicon.png')} style={styles.searchIcon} />

          <TextInput 
            style={styles.textInput}
            placeholder='Search'
          />
        </View>
        <Text style={styles.categories}>Categories</Text>
          
        <ScrollView horizontal style={styles.scrollview}>
          <View style={styles.largeSlide}>
                <Image source={require('./assets/exercise.png')} style={styles.largeActivityIcon} />

            <Text style={styles.activities}>Exercise</Text>
          </View>
          <View style={styles.largeSlide}>
            <Image source={require('./assets/studying.png')} style={styles.largeActivityIcon} />
          
            <Text style={styles.activities}>Study</Text>
          </View>
          <View style={styles.largeSlide}>
          <Image source={require('./assets/code.jpg')} style={styles.largeActivityIcon} />
          <Text style={styles.activities}>Code</Text>
        </View>
        <View style={styles.largeSlide}>
         <Image source={require('./assets/cook 2.png')} style={styles.largeActivityIcon} />
          <Text style={styles.activities}>Cook</Text>
        </View>
        <View style={styles.largeSlide}>
        <Image source={require('./assets/self care.jpg')} style={styles.largeActivityIcon} />
          <Text style={styles.activities}>Self-care</Text>
        </View>
        <View style={styles.largeSlide}>
        <Image source={require('./assets/travel.jpg')} style={styles.largeActivityIcon} />
          <Text style={styles.activities}>Travel</Text>
        </View>
        <View style={styles.largeSlide}>
        <Image source={require('./assets/leisure.jpg')} style={styles.largeActivityIcon} />
          <Text style={styles.activities}>Relaxation & Leisure</Text>
        </View>
        <View style={styles.largeSlide}>
        <Image source={require('./assets/socialize.png')} style={styles.largeActivityIcon} />
          <Text style={styles.activities}>Socialize</Text>
        </View>
        <View style={styles.largeSlide}>
          <Image source={require('./assets/research.jpg')} style={styles.largeActivityIcon} />
          <Text style={styles.activities}>Research</Text>
        </View>
        </ScrollView>
        <Text style={styles.ongoingtask}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskBox}>
              <Text style={styles.task}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    paddingTop: 52,
    paddingLeft: 20, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 20,
  },
  text: {
    fontSize: 30,
  },
  icon: {
    width: 50,
    height: 50,
  },
  smalltext: {
    fontSize: 18,
    marginTop: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF9F7',
    borderRadius: 10,
    width: 246,
    height: 50,
    marginTop: 38,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
  categories: {
    fontSize: 22,
    marginTop: 25,
    fontWeight:'bold',

  },
 activities:{
    marginRight:15,
    width:130,
    height:130,
    borderRadius:15,
    marginRight:15,
    borderRadius:15,
    padding: 20,
    paddingTop:18,
    marginTop:10,
    backgroundColor: '#FBF9F7',
    fontSize:18,
    fontWeight:'bold',
  },
  largeSlide: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
    width: 200,
    height: 200,
  },
  largeActivityIcon: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  ongoingtask: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
  },
  taskBox: {
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 12,
    borderColor:'#DAA06D',
    borderWidth:1,
    
  },
  task: {
    fontSize: 16,
    padding: 26,
    width: 348,
    height: 125,
    fontWeight: 'bold',
  },
});
