import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Book() {

  const navigation = useNavigation();

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState();
  const [read, setRead] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('books').then(data => {
      const books = JSON.parse(data);

      setBooks(books);
    });
  }, []);

  function isValid() {
    if(title === '' || title === null) {
      return false;
    } 
    
    return true;
  }

  async function onSave() {
    if(isValid()) {
      
      const id = Math.random(5000).toString();

      const data = {
        id,
        title,
        description,
        photo,
        read
      }

      books.push(data);

      await AsyncStorage.setItem('books', JSON.stringify(books));
      navigation.goBack();

    } else {
      alert('É necessário inserir um título');
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Anote um novo livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={5}   
        value={description}
        onChangeText={(text) => {
          setDescription(text);
        }}     
      />

      <TouchableOpacity style={styles.cameraButton}>
        <MaterialIcons
          name="camera-alt"
          size={35}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.saveButton, (isValid()) ? '' : styles.saveButtonDisable]}
        onPress={onSave}
      >
        <Text style={styles.saveButtonText}>
          Anotar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>
          Cancelar
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#F2F089',
  },

  pageTitle: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 70,
    marginBottom: 40,
    color: '#3498db',
    fontFamily: 'ArchitectsDaughter_400Regular',
    fontWeight: '900',
  },

  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#5d6d7e',
    fontFamily: 'ArchitectsDaughter_400Regular',
    padding: 0
  },

  cameraButton: {
    width: 70,
    height: 70,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 50
  },

  saveButtonDisable:{
    opacity: 0.5
  },

  saveButton: {
    backgroundColor: '#3498db',
    alignSelf: 'center',
    paddingHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 50
  },

  saveButtonText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'ArchitectsDaughter_400Regular',
  },

  cancelButton: {
    alignSelf: 'center'
  },

  cancelButtonText: {
    color: '#ec7063',
    fontSize: 20,
    fontFamily: 'ArchitectsDaughter_400Regular',
  }
})