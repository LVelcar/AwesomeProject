import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    // Navega a la pantalla de restablecimiento de contraseña
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const isEmailValid = (email) => {
    // Expresión regular para validar correos electrónicos
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Verifica que la contraseña tenga al menos 8 caracteres y contenga al menos una mayúscula y un dígito
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  const handleSubmit = () => {
    if (!isEmailValid(email)) {
      Alert.alert('Error','Ingrese un correo electrónico válido');
    } else if (!isPasswordValid(password)) {
      Alert.alert('Error','La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula y un número.');
    } else {
      // Lógica de inicio de sesión
      navigation.navigate("Task");
      console.log(email);
      console.log(password);
    }
  };
  
  return (
    <KeyboardAwareScrollView style={styles.container}> 
    <View style={styles.innerContainer}>
        <Image style={styles.logo}
          source={require("./assets/fantasma.png")}>
        </Image>
        <Text style={styles.title}>ToDo App</Text>
        <Text style={styles.name}>Inicio De Sesión</Text>
        <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#007AFF" style={styles.inputIcon} /> 
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={text => setEmail(text)}
          behavior="padding"
        />
        </View>
        <View style={styles.inputContainer}>
        <Icon name="lock" size={25} color="#007AFF" style={styles.inputIcon} /> 
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotSignUp} onPress={handleSignUp}>
          <Text style={styles.forgotSignUpText}>Crear Cuenta</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 100,
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
  name: {
    fontSize: 22,
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
  loginButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10, 
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
  },
  forgotSignUp: {
    marginTop: 10, 
  },
  forgotSignUpText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;
