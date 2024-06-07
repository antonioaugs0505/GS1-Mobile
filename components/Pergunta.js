// src/components/Pergunta.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pergunta = ({ pergunta, alternativas, indexPergunta, onResponder, respostaUsuario }) => {
  const [respostaSelecionada, setRespostaSelecionada] = useState(respostaUsuario?.resposta);

  const selecionarResposta = (index) => {
    setRespostaSelecionada(index);
    onResponder(indexPergunta, index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{pergunta}</Text>
      {alternativas.map((alternativa, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.alternativa,
            respostaSelecionada === index && styles.alternativaSelecionada,
          ]}
          onPress={() => selecionarResposta(index)}
        >
          <Text style={styles.textoAlternativa}>{alternativa.texto}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#E5FAFF',
    borderRadius: 10,
    padding: 15,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#447FFC',
    marginBottom: 10,
  },
  alternativa: {
    backgroundColor: '#F3FDFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  alternativaSelecionada: {
    backgroundColor: '#447FFC',
    borderWidth: 2,
    borderColor: '#315E7E',
  },
  textoAlternativa: {
    color: '#315E7E',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Pergunta;
