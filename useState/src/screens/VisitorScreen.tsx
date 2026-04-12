import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function VisitorScreen() {
  const [name, setName] = useState<string>('');
  const [accessAuthorized, setAccessAuthorized] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {!accessAuthorized ? (
        <View>
          <Text style={styles.title}>Identificação de Visitante</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={setName}
          />

          <Button
            title="Solicitar Acesso"
            onPress={() => setAccessAuthorized(true)}
            disabled={name.trim().length === 0}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Acesso Liberado para: {name}</Text>

          <Button
            title="Sair"
            onPress={() => {
              setAccessAuthorized(false);
              setName('');
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'medium',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
});