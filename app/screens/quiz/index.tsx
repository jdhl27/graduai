import React, {useEffect, useState} from 'react';
import {Text, ActivityIndicator, View, Alert} from 'react-native';
import Layout from '@app/components/layouts/content';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import Head from '@app/components/shared/head';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {DashboardStack} from '@app/types/navigation';
import Buttom from '@app/components/buttom';
import axios from 'axios';
import {Input} from '@app/components/forms';
import {useQuiz} from '@app/hooks/useQuiz';
import {stringPrograms} from '@app/assets/data/programsarray';
import {styles} from './styles';

function Index() {
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();

  const {InsertItem, GetItems} = useQuiz();

  type HistoryMessageProps = {
    role: string;
    content: string;
  };
  const commonStyles = stylesCommon();

  const maxQuiz = 10;
  const promptInit = `quiero que apartir de ahora seas un test vocacional, hazme preguntas una por una hasta que yo te diga que pares, solo responde con la pregunta`;

  const [countQuiz, setCountQuiz] = useState(0);
  const [reply, setReply] = useState('');
  const [question, setQuestion] = useState('');
  const [load, setLoad] = useState(false);
  const [historyMessages, setHistoryMessages] = useState<HistoryMessageProps[]>(
    [
      {
        role: 'system',
        content: promptInit,
      },
    ],
  );

  const sendPrompt = async (messagesarray: HistoryMessageProps[]) => {
    try {
      setLoad(true);
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: messagesarray,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer sk-proj-yJdfxuBXmI96Amy7hC6MT3BlbkFJYaTaLaOicCJEOXhys7Sa',
          },
        },
      );
      setQuestion(response.data.choices[0].message.content);

      const regex = /\((.*?)\)/g;
      const results = response.data.choices[0].message.content.match(regex);

      if (results) {
        const contenidoEntreParentesis = results.map((result: any) =>
          result.slice(1, -1),
        );
        const result = contenidoEntreParentesis.flatMap((element: any) =>
          element.split(',').map((item: any) => item.trim()),
        );
        navigation.navigate('RecommendedScreen', {options: result});
      }

      if (countQuiz > 1) {
        InsertItem(messagesarray);
      }
      setHistoryMessages([...messagesarray, response.data.choices[0].message]);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error('Error fetching completion:', error);
    }
  };

  const handlerQuiz = async () => {
    console.log('handlerQuiz');
    setLoad(true);
    const data = await GetItems();

    if (data.length > 0) {
      await sendPrompt(data);
      setCountQuiz((data.length - 1) / 2 + 1);
      setLoad(false);
    } else {
      setCountQuiz(1);
      console.log('init');
    }
  };

  useEffect(() => {
    handlerQuiz();
  }, []);

  useEffect(() => {
    if (countQuiz === 1) {
      console.log('es la primera pregunta');
      sendPrompt(historyMessages);
    } else if (countQuiz > 1) {
      console.log('next quiz');

      let additional = 'sigue con otra pregunta';
      if (countQuiz > maxQuiz) {
        additional = `ya no hagas mas preguntas y dame maximo 5 opciones separadas por comas de carreras basado en mis respuestas, encierralas en parentesis por ejemplo (carrera1, carrera2, carrera3), esas opciones quiero que me las de escogiendo solo de esta lista: ${stringPrograms}`;
      }

      if (reply !== '') {
        const newMessage = [
          ...historyMessages,
          {role: 'user', content: `${reply}, ${additional}`},
        ];
        sendPrompt(newMessage);
      }

      setReply('');
    }
  }, [countQuiz]);

  const next = () => {
    if (reply !== '') {
      setCountQuiz(countQuiz + 1);
    } else {
      Alert.alert('Debe agregar una respuesta');
    }
  };

  return (
    <>
      <Layout>
        <Head backButton={true} />
        <Margin top={60} />

        {load ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text
              style={[
                commonStyles.txt_h2,
                commonStyles.txt_center,
                {fontSize: 24},
              ]}>
              {`${countQuiz <= maxQuiz ? countQuiz : ''} - ${question}`}
            </Text>
            <Margin top={40} />
            {countQuiz <= maxQuiz && (
              <>
                <Input
                  placeholder="Agrega una respuesta..."
                  onChangeText={value => setReply(value)}
                  value={reply}
                  error={''}
                  multiline={true}
                />

                <Margin top={30} />

                <View style={styles.btncontent}>
                  <Buttom
                    onSubmit={() => next()}
                    label="Siguiente"
                    style="primary"
                  />
                </View>
              </>
            )}
          </>
        )}
      </Layout>
    </>
  );
}

export default Index;
