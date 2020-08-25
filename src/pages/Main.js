import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Main() {

  const data = [
    {
      id: '1',
      title: 'Clean Code',
      annotations: 'Livro muito bom!', 
      read: false,
      photo: null
    },
    {
      id: '2',
      title: 'JavaScript for dummies',
      annotations: 'Livro muito bom!', 
      read: false,
      photo: null
    },
    {
      id: '3',
      title: 'Sangue suor e pixels',
      annotations: 'Livro muito bom!', 
      read: false,
      photo: null
    },
  ]

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
              />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
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
    left: '10%',
    borderLeftWidth: 1,
    borderColor: '#ec7063',
  },  

  toolbox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#5d6d7e',
    paddingTop: 50,
    paddingBottom: 10,
    justifyContent: 'space-around'
  },

  title: {
    color: '#3498db',
    fontSize: 30,
    flex: 1,
    fontFamily: 'ArchitectsDaughter_400Regular',
    fontWeight: '900',
    marginLeft: '12%'
  },

  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: '3%'
  },

  itemButton: {
    borderBottomWidth: 1,
    borderColor: '#5d6d7e',
    paddingVertical: 10,
    paddingLeft: '12%'
  },

  itemText: {
    fontSize: 20,
    fontFamily: 'ArchitectsDaughter_400Regular',
    fontWeight: '900'
  }
})