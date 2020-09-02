import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Main() {

  const[books, setBooks] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('books').then(data => {
      const books  = JSON.parse(data);

      setBooks(books);
    });

  });

  const navigation = useNavigation();

  return(
      <View style={styles.container}>
        <View style={styles.redLine}/>
        <View style={styles.toolbox}>
          <Text style={styles.title}>Lista de Leitura</Text>
          <TouchableOpacity style={styles.addButton}>
              <MaterialIcons
                name="add"
                size={40}
                color="#fff"
                onPress={() => navigation.navigate('Book')}
              />
          </TouchableOpacity>
        </View>
        <FlatList
          data={books}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemButton}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F2F089',
  },

  redLine: {
    height: '100%',
    position: 'absolute',
    left: 50,
    borderLeftWidth: 1,
    borderColor: '#ec7063',
  },  

  toolbox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#5d6d7e',
    paddingTop: 70,
    paddingBottom: 10,
    justifyContent: 'space-around'
  },

  title: {
    color: '#3498db',
    fontSize: 30,
    flex: 1,
    fontFamily: 'ArchitectsDaughter_400Regular',
    fontWeight: '900',
    marginLeft: 60
  },

  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 10
  },

  itemButton: {
    borderBottomWidth: 1,
    borderColor: '#5d6d7e',
    paddingVertical: 10,
    paddingLeft: 60
  },

  itemText: {
    fontSize: 20,
    fontFamily: 'ArchitectsDaughter_400Regular',
    fontWeight: '900',
    color: '#3b4b4b'
  }
})