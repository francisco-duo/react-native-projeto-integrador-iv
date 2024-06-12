import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const Formulario = () => {
  const [form, setForm] = useState({
    nomeCompleto: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    senha: '',
    confirmarSenha: '',
    crp: '',
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const RegisterPage = () => {
    // Aqui você pode adicionar a lógica de validação e submissão do formulário
    if (form.senha !== form.confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
    } else {
      Alert.alert("Sucesso", "Formulário enviado com sucesso!");
      console.log(form);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={form.nomeCompleto}
        onChangeText={(value) => handleChange('nomeCompleto', value)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(value) => handleChange('email', value)}
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={form.cpf}
        onChangeText={(value) => handleChange('cpf', value)}
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={form.dataNascimento}
        onChangeText={(value) => handleChange('dataNascimento', value)}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={form.senha}
        onChangeText={(value) => handleChange('senha', value)}
      />

      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={form.confirmarSenha}
        onChangeText={(value) => handleChange('confirmarSenha', value)}
      />

      <Text style={styles.label}>CRP</Text>
      <TextInput
        style={styles.input}
        placeholder="CRP"
        value={form.crp}
        onChangeText={(value) => handleChange('crp', value)}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    fontSize: 16,
  },
});

export default RegisterPage;