import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ForgotPasswordScreen({}) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); // Estado para la validación del email

  const handleEmailChange = (text) => {
    setEmail(text);
    // Validar el email cuando cambia
    setIsEmailValid(validateEmail(text));
  };

  const validateEmail = (email) => {
    // Expresión regular para validar correos electrónicos
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleResetPassword = () => {
    if (email.trim() === '') {
      alert('Por favor, ingrese su dirección de correo electrónico.');
    } else if (!isEmailValid) {
      alert('Por favor, ingrese una dirección de correo electrónico válida.');
    } else {
      // Aquí puedes implementar la lógica para enviar un correo de restablecimiento de contraseña
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}> 
    <View style={styles.innerContainer}>
      <Image style={styles.logo}
        source={require("./assets/fantasma.png")}>
      </Image>
      <Text style={styles.title}>ToDo App</Text>
      <Text style={styles.name}>Restablecer Contraseña</Text>
      <View style={styles.inputContainer}>
      <Icon name="envelope" size={20} color="#007AFF" style={styles.inputIcon} /> 
      <TextInput style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={handleEmailChange}
      />
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 120,
  },
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  name:{
    fontSize: 20,
    marginBottom: 20
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  resetButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
