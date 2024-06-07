// src/screens/Quiz.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import Pergunta from '../components/Pergunta';
import Gabarito from '../components/Gabarito';
import Header from '../components/Header';

const Quiz = ({ navigation }) => {
  const [showGabarito, setShowGabarito] = useState(false);
  const [respostas, setRespostas] = useState([]);
  const [acertos, setAcertos] = useState(0);

  const perguntas = [
    {
      pergunta: 'Qual é a principal causa do aumento dos oceanos?',
      alternativas: [
        { texto: 'Derretimento das geleiras', correta: true },
        { texto: 'Poluição das águas', correta: false },
        { texto: 'Aquecimento global', correta: false },
        { texto: 'Descarte de resíduos sólidos', correta: false },
      ],
    },
    {
      pergunta: 'O que causa o derretimento das geleiras?',
      alternativas: [
        { texto: 'Aquecimento global', correta: true },
        { texto: 'Poluição atmosférica', correta: false },
        { texto: 'Aumento da atividade vulcânica', correta: false },
        { texto: 'Exploração de recursos minerais', correta: false },
      ],
    },
    {
      pergunta: 'Qual é o impacto da poluição dos oceanos?',
      alternativas: [
        { texto: 'Morte de espécies marinhas', correta: true },
        { texto: 'Aumento do nível do mar', correta: false },
        { texto: 'Aquecimento das águas', correta: false },
        { texto: 'Redução da biodiversidade', correta: false },
      ],
    },
    {
      pergunta: 'Como o aumento do nível do mar afeta as comunidades costeiras?',
      alternativas: [
        { texto: 'Causa inundações e deslocamento de pessoas', correta: true },
        { texto: 'Diminui a temperatura da água', correta: false },
        { texto: 'Aumenta a salinidade das águas', correta: false },
        { texto: 'Causa tempestades mais frequentes', correta: false },
      ],
    },
    {
      pergunta: 'O que pode ser feito para reduzir a poluição dos oceanos?',
      alternativas: [
        { texto: 'Reciclar o lixo plástico', correta: true },
        { texto: 'Utilizar mais combustíveis fósseis', correta: false },
        { texto: 'Descartar resíduos industriais nos rios', correta: false },
        { texto: 'Aumentar a pesca industrial', correta: false },
      ],
    },
  ];

  const handleResposta = (indexPergunta, indexResposta) => {
    const resposta = { pergunta: indexPergunta, resposta: indexResposta };
    const novasRespostas = [...respostas];
    novasRespostas[indexPergunta] = resposta;
    setRespostas(novasRespostas);
  };

  const calcularGabarito = () => {
    let acertos = 0;
    perguntas.forEach((pergunta, indexPergunta) => {
      if (pergunta.alternativas[respostas[indexPergunta]?.resposta]?.correta) {
        acertos++;
      }
    });
    setAcertos(acertos);
    setShowGabarito(true);
  };

  const resetQuiz = () => {
    setShowGabarito(false);
    setRespostas([]);
    setAcertos(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {perguntas.map((pergunta, index) => (
            <View key={index} style={styles.perguntaContainer}>
              <Pergunta
                pergunta={pergunta.pergunta}
                alternativas={pergunta.alternativas}
                indexPergunta={index}
                onResponder={handleResposta}
                respostaUsuario={respostas[index]}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.concluirButton} onPress={calcularGabarito}>
            <Text style={styles.concluirButtonText}>Concluir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paddingBottom} />
      </ScrollView>
      <Menu navigation={navigation} active="Quiz" />
      <Gabarito
        visible={showGabarito}
        onClose={resetQuiz}
        correctAnswers={acertos}
        totalQuestions={perguntas.length}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8FF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  perguntaContainer: {
    backgroundColor: '#E4FAFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  concluirButton: {
    backgroundColor: '#447FFC',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  concluirButtonText: {
    color: '#E4FAFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  paddingBottom: {
    paddingBottom: 40,
  },
});

export default Quiz;
