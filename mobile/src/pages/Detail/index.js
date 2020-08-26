import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'; // usamos o useRoute para recuperar informações enviadas de outra tela para essa tela.
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles';

const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const mensagem = 'Teste do aplicativo Be the hero'

  //para receber o valor de incidents da rota Incidents usamos os Params 
  const incident = route.params.incident;

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){// envia email
    MailComposer.composeAsync({
      subject: `Herói do ${incident.title}: ${incident.description}`, // assunto do email
      recipients:[incident.email], //para quem o email será enviado
      body: mensagem, // mensagem do email


    })
  }

  function sendWhattsapp(){ // Usamos o linking para acessar apps externo com o app mobile
    Linking.openURL(`whatsapp://send?phone=5532${incident.whattsapp}&text=${mensagem}`);
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
            <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

            <Text style={styles.incidentProperty}>{incident.title}</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>VALOR: </Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}
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