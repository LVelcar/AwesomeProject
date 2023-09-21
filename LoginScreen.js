import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    // Navega a la pantalla de restablecimiento de contraseña
    navigation.navigate('ForgotPassword');
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
      alert('Ingrese un correo electrónico válido');
    } else if (!isPasswordValid(password)) {
      alert('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula y un número.');
    } else {
      // Lógica de inicio de sesión
      console.log(email);
    }
  };
  
  return (
    <KeyboardAwareScrollView style={styles.scroll} 
    extraHeight={Platform.OS === 'IOS' ? 100 : 0} // Ajusta esto según tus necesidades
    enableOnAndroid={true}>
    <View style={styles.innercontainer}>
        <Image style={styles.logo}
            source={require("./assets/fantasma.png")}>
        </Image>
        <Text style={styles.title}>ToDo App</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={text => setEmail(text)}
            behavior="padding"
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
    innercontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        flex: 1
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
});

export default LoginScreen;