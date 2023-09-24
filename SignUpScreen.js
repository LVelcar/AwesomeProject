import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignUpScreen ({ navigation }) {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleLogin = () => {
        // Navega a la pantalla de Iniciar Sesión
        navigation.navigate('Login');
    };

    const isEmailValid = (email) => {
        // Expresión regular para validar correos electrónicos
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };
    
    const isPasswordValid = (password1) => {
        // Verifica que la contraseña tenga al menos 8 caracteres y contenga al menos una mayúscula y un dígito
        return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password1);
    };

    const handleSignUp = () => {
        if (!isEmailValid(email)) {
            Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');            
        } else if (!isPasswordValid(password1)) {
            Alert.alert('Error','La contraseña debe tener al menos 8 caracteres y una mayúscula.');
        } else if (password1 !== password2) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
        } else {
            // Lógica para crear la cuenta.
        };
    }

    return (
        <KeyboardAwareScrollView style={styles.container}> 
        <View style={styles.innerContainer}>
            <Image style={styles.logo}
              source={require("./assets/fantasma.png")}>
            </Image>
            <Text style={styles.title}>ToDo App</Text>
            <Text style={styles.name}>Crear Cuenta</Text>
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
              value={password1}
              onChangeText={text => setPassword1(text)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Icon name="lock" size={25} color="#007AFF" style={styles.inputIcon} /> 
            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#888"
              secureTextEntry
              value={password2}
              onChangeText={text => setPassword2(text)}
            />
            </View>
            <TouchableOpacity style={styles.signButton} onPress={handleSignUp}>
                <Text style={styles.signButtonText}>Crear Cuenta</Text>
            </TouchableOpacity>
            <Text style={styles.or}>Or</Text>
            <TouchableOpacity style={styles.loginScreen} onPress={handleLogin}>
                <Text style={styles.loginScreenText}>Login</Text>
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
        marginTop: 80,
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
        marginBottom: 20,
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
    signButton: {
        width: '80%',
        height: 40,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    signButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    loginScreen: {
        marginTop: 10, 
    },
    loginScreenText: {
        color: '#007AFF',
        fontSize: 18,
    },
    or: {
        marginTop: 10,
    }
});

