import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import Constants from 'expo-constants';


const Details = ({
  hotel,
  cleanSelectedHotel
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'red', alignSelf: 'stretch' }]}>
        <Text style={[styles.fonte, { color: "#fff" }]}>{hotel.name}</Text>
      </View>
      <View>
        <Image />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => cleanSelectedHotel()}
        ><Text>Fechar</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Details



const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  },
  button: {
    padding: 10,
    backgroundColor: 'skyblue',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    minWidth: 400,
    height: 40,
    paddingHorizontal: 5,
  },
  fonte: {
    color: "black",
    fontSize: 20,
  },
  box: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 50,
    height: 50,
  },
  separator: {
    marginBottom: 20,
  },
});
