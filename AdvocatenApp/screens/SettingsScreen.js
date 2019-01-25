import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {

    return (
      <ImageBackground source={require('../assets/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>

        <View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
              <Text style={{ fontSize: 30 }}> Advocaten app</Text>
            </View>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
  <Text style={{color: '#fff'}}>
  Informatie voor advocaten

De AdvocatenApp is een nieuw podium voor advocaten. 

- Bereikbaarheid en vindbaarheid vergroot U middels een vermelding in de AdvocatenApp.  Klanten hebben een prachtig gratis advocaten telefoonboekje altijd op zak.

- Na aanmelding garanderen wij U minimaal 1 zaak, vaak ontvangt U veel meer.  Het kost U feitelijk dus niets !

- Vermelding met foto en profiel per advocaat per rechtsgebied voor de periode van een half jaar.

- Korting bij meerdere vermeldingen binnen een kantoor.

- Mail direct voor een passende offerte / aanbod.

- Regelmatige vermelding van Uw naam en profiel op Twitter.

- Directe doorverwijzing van alle nieuwe zaken. 

- Adverteren op de advocatenapp?  Of investeren in de app (en onze overige producten) ?  informeer naar de mogelijkheden :

Mail ons: info@advocatenapp.nl</Text>
</View>


          </ScrollView>
        </View>

      </ImageBackground>
    );

    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}

const styles = StyleSheet.create({
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 40,
  }
})
