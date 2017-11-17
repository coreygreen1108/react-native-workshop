import React, {Component} from 'react'; 
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Game extends Component {
    constructor(props){
        super(props);
        let emojis = [
            ['🤐💃', 'shut up and dance'],
            ['👨🔛🌙', 'man on the moon'],
            ['☔️🐱➕🐶','its raining cats and dogs'],
            ['🥊🍺❤️', 'punch drunk love'],
            ['🚫😭⤴️⤵️💦🥛', 'don\'t cry over spilled milk']
            ]; 

        this.state = {
            guess: '',
            score: 0,
            emojis: emojis,
            randNum: Math.floor(Math.random() * emojis.length)
        }
    }

    checkGuess(guess){
        if(guess.toLowerCase() === this.state.guess){
            this.setState({
                score: this.state.score + 10,
                guess: ''
            })
        } else {
            this.setState({
                guess: ''
            })
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{color: "#FFF", fontSize: 20}}>Guess the phrase!</Text>
                <Text style={{color: "#FFF", fontSize: 20}}>SCORE: {this.state.score}</Text>
                <Text style={{color: "#FFF", fontSize: 20}}>{this.state.emojis[this.state.randNum][0]}</Text>
                <TextInput
                    style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 5}}
                    onChangeText={(guess) => this.setState({guess})}
                    value={this.state.guess}
                    placeholder="Guess the phrase!"
                />
                <Button
                    onPress={() => this.checkGuess(this.state.guess)}
                    title="Make Guess"
                    color="#841584"
                />
                <Button style={{marginTop: 200}} onPress={() => Actions.pop() } title="Quit Game">Quit Game</Button>
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
  