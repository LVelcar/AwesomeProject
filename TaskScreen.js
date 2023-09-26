import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TaskScreen({}) {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTasksText] = useState('');
    const [taskIdCounter, setTaskIdCounter] = useState(0);

    //Función para agregar tareas.
    const addTask = () => {
        if (taskText.trim() !== '') {
            const newTask = { id: taskIdCounter, text: taskText, completed: false };
            setTasks([...tasks, newTask]); // Se crea una copia del arreglo actual.
            setTasksText(''); // Se vacía el campo del input.
            setTaskIdCounter(taskIdCounter + 1); //Para incrementar el contador.
            Alert.alert('Tarea agregada correctamente.')
            console.log("Tarea agregada:", newTask);
        }
        else {
            Alert.alert('Error', 'Por favor ingrese una tarea.')
            console.log("Intento de agregar una tarea vacía.");
        }
    };

    //Función para eliminar la tarea seleccionada por ID.
    const deleteTask = (taskId) => {
        //Se crea un nuevo arreglo de tareas y se iteran por medio del estado 'tasks'.
        const updateTask = tasks.filter((task) => task.id !== taskId);
        Alert.alert(`La tarea fue eliminada.`);
        //Se asigna al estado las nuevas tareas sin la que fue eliminado.
        setTasks(updateTask);
        console.log(tasks);
    };

    // Función para validar el estado de las tareas cuando
    // se marquen como completadas.
    const toggleCompleteState = (taskId) => {
        const updateTask = tasks.map((task) => 
            // Si el id coincide, se crea una copia de la tarea actual utilizando la sintaxis de propagación.
            // Cambia su valor de completed. 
            task.id === taskId ? {...task, completed: !task.completed } : task
         );
         // Actualiza los datos del arreglo.
         setTasks(updateTask);
         console.log("Tarea completada con el ID:", taskId);
    }    

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
                <ScrollView style={styles.taskList}>
                    {tasks.map((task) => (
                        <View key={task.id} style={styles.taskItem}>
                            <CheckBox
                                containerStyle={styles.checkboxContainer}
                                checked={task.completed}
                                onPress={() => toggleCompleteState(task.id)}
                                checkedColor='#007AFF'
                            />
                            <Text style={task.completed ? styles.completedTaskText : styles.taskText}
                                numberOfLines={3}>
                                {task.text}
                            </Text>
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => deleteTask(task.id)}
                            >
                                <Icon name="trash" size={20} color='#FF0000' />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
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
        justifyContent: 'space-between',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 1,
    },
    taskText: {
        flex: 1,
        flexWrap: 'wrap',
        color: '#000',
        fontSize: 16,  
        textAlign: 'left', 
    },    
    completedTaskText: {
        color: '#ccc', 
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'left',
    },
    deleteButton: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        borderRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1,
    },
});
