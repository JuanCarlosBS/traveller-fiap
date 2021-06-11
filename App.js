import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Details from './Details'
import hotelsData from './hotels.json'
var DisplayWidth = Dimensions.get('window').width; //full width
var DisplayHeight = Dimensions.get('window').height; //full height 

export default function App() {
  const [selectedHotel, setSelectedHotel] = useState();
  const [hotels, setHotels] = useState(hotelsData);

  return (
    <>
      {selectedHotel ? (
        <View style={styles.container}>
          <View style={[styles.box, { backgroundColor: 'red', alignSelf: 'stretch' }]}>
            <Text style={[styles.fonte, { color: "#fff" }]}>{selectedHotel.name}</Text>
            <Text style={[styles.fonte, { color: "#fff", fontSize: 14 }]}>{selectedHotel.review} Estrelas</Text>
          </View>
          <View>
            <Image source={{ uri: selectedHotel.photo }} style={styles.stretch} />
          </View>
          <View style={styles.option}>
            <Text style={{ fontWeight: 'bold', flexWrap: 'wrap' }}>Endereço: </Text><Text style={{maxWidth: '80%', flexWrap: 'wrap'}}>{selectedHotel.address}</Text>
          </View>
          <View style={styles.option}>
            <Text style={{ fontWeight: 'bold' }}>Telefone: </Text><Text>{selectedHotel.phone}</Text>
          </View>
          <View style={styles.option}>
            <Text style={{ fontWeight: 'bold' }}>Preço: </Text><Text>R${selectedHotel.price.toFixed(2)}</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSelectedHotel()}
            ><Text style={{ color: '#fff' }}>Voltar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={[styles.box, { backgroundColor: 'red', alignSelf: 'stretch' }]}>
            <Text style={[styles.fonte, { color: "#fff" }]}>Hoteis</Text>
          </View>
          {hotels.map((hotel, id) => {
            return (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  console.log("hotel", hotel)
                  setSelectedHotel(hotel)
                }}
                key={id}>
                <Text style={styles.fonte}>{hotel.name}</Text>
                <Text style={styles.fonte}>{`R$${hotel.price}`}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  footer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  stretch: {
    alignSelf: 'stretch',
    width: DisplayWidth,
    height: DisplayHeight / 2,
    resizeMode: 'stretch',
  },
  button: {
    borderRadius: 5,
    padding: 5,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: "red"
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
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 50,
    height: 50,
  },
  separator: {
    marginBottom: 20,
  },
});