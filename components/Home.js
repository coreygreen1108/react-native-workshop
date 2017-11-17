import React, {Component} from 'react'; 
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
    render(){
        return (
            <Image style={styles.backgroundImage} source={require('../assets/globe.png')}>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={{fontSize: 20, color: '#FFFFFF'}}>🌎 Welcome to Planet Emoji 🌎</Text>
                        <Button color="#FF0000" style={{fontSize: 40, fontWeight: 'bold'}} onPress={() => Actions.game() } title="Start Game">Start Game</Button>
                    </View>
                </View>
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'rgba(185, 185, 185, .5)'
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    box: {
        borderWidth: 3,
        borderColor: '#111',
        backgroundColor:'rgba(30, 30, 30, .6)'
    }
  });
  