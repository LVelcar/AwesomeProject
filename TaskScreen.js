import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function TaskScreen({}) {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTasksText] = useState('');

    const addTask = () => {
        if (taskText.trim() !== '') {
            const newTask = { text: taskText, completed: false };
            setTasks([...tasks, newTask]);
            setTasksText('');
            
            console.log("Tarea agregada:", newTask);
        }
        else {
            console.log("Intento de agregar una tarea vacía.");
        }
    };

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.logo}
                source={require("./assets/fantasma.png")}>
                </Image>
                <Text style={styles.title}>ToDo App</Text>
                <View style={styles.taskContainer}>
                    <TextInput
                        style={styles.taskInput}
                        placeholder='Agregar una tarea...'
                        value={taskText}
                        onChangeText={(text) => setTasksText(text)}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addTask}>
                        <Icon name='plus' size={20} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.taskList}>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.taskItem}>
                    <Text style={styles.taskText}>{task.text}</Text>
                    </View>
                ))}
                </View>
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
    taskContainer: {
        flexDirection:'row',
        alignItems: 'center',
        width: '80%',
        marginBottom: 10,
    },
    taskInput:{
        flex: 1,
        height: 40,
        color: '#000',
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    addButton: {
        width: 40,
        height: 40,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 10,
    },
    taskList: {
        width: '80%',
        marginTop: 10,
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    taskText: {
        marginLeft: 10,
    },
});
