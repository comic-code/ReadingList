import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Book() {

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu novo livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={5}        
      />

      <TouchableOpacity style={styles.cameraButton}>
        <MaterialIcons
          name="camera-alt"
          size={35}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
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