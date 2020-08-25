import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles';

const Detail = () => {

  const navigation = useNavigation();
  const mensagem = 'Teste do aplicativo Be the hero'

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){// envia email
    MailComposer.composeAsync({
      subject: 'Herói do Caso: Cadelinha Atropelada', // assunto do email
      recipients:['josefr.almeidaads@gmail.com'], //para quem o email será enviado
      body: mensagem, // mensagem do email


    })
  }

  function sendWhattsapp(){ // Usamos o linking para acessar apps externo com o app mobile
    Linking.openURL(`whatsapp://send?phone=553299089838&text=${mensagem}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack} >
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
            <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadela atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              R$ 120,00
            </Text>      
      </View>

      <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>
          
          <View style={styles.actions}>
              <TouchableOpacity style={styles.action} onPress={sendWhattsapp}>
                  <Text style={styles.actionsText}>Whattsapp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.action} onPress={sendMail} >
                  <Text style={styles.actionsText} >Email</Text>
              </TouchableOpacity>
          </View>

      </View>
    </View>
  );
}

export default Detail;