import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen({ onBackToLogin }) {
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
    // Aquí puedes implementar la lógica para enviar un correo de restablecimiento de contraseña
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require("./assets/fantasma.png")}>
      </Image>
      <Text style={styles.title}>Restablecer Contraseña</Text>
      <TextInput
        style={[
          styles.input,
          !isEmailValid && styles.inputError, // Aplicar un estilo de error si el email no es válido
        ]}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={handleEmailChange}
      />
      {!isEmailValid && (
        <Text style={styles.errorText}>Ingrese un correo electrónico válido</Text>
      )}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    marginBottom: 10,
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
  backToLogin: {
    marginTop: 10,
  },
  backToLoginText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
