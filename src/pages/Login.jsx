import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function LoginPage({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Valide as credenciais aqui
        // if (username === 'user' && password === 'pass') {
        //     navigation.navigate('Inicio');
        // } else {
        //     alert('Credenciais inválidas');
        // }

        navigation.navigate('Inicio');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TouchableOpacity
                style={styles.input}
                onPress={handleLogin}
            >
                <Text style={{ color: "#FF725E" }}>ENTRAR</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 6 }}>
                <TouchableOpacity
                    style={styles.input} 
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={{ color: "#FF725E" }}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#FF725E',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 8,
        backgroundColor: '#fff',
        borderWidth: 0,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
});