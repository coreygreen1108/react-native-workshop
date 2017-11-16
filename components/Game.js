import React, {Component} from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            emojis: [
            ['🤐💃', 'shut up and dance'],
            ['👨🔛🌙', 'man on the moon'],
            ['☔️🐱➕🐶','its raining cats and dogs'],
            ['🥊🍺❤️', 'punch drunk love'],
            ['🚫😭⤴️⤵️💦🥛', 'don\'t cry over spilled milk']
            ]
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={{color: "#FFF", fontSize: 20}}>Guess the phrase!</Text>
                <Text style={{color: "#FFF", fontSize: 20}}>{this.state.emojis[Math.floor(Math.random() * this.state.emojis.length)][0]}</Text>
                <Button onPress={() => Actions.pop() } title="Quit Game">Quit Game</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCCCC',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  