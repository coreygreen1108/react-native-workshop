import React, {Component} from 'react'; 
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
const originalEmojis = require('../utils/game-utils/emojis').emojis.slice();
const emojis = originalEmojis.slice();
const initialState = {
    guess: '',
    score: 0,
    emojis: emojis,
    randNum: Math.floor(Math.random() * emojis.length),
    gameMessage: 'Welcome to Emoji Planet',
    youWin: false
};

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = Object.assign({}, initialState);
        this.checkGuess = this.checkGuess.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    checkGuess(){
        if(!this.state.guess){
            let randomEncouragement = ['Don\'t be afraid to guess!', 'Spread your wings and fly', 'You must type an answer!']
            this.setState({
                gameMessage: randomEncouragement[Math.floor(Math.random() * randomEncouragement.length)]
            })
        }
        else if(this.state.guess.replace(/\W/g, '').toLowerCase() === this.state.emojis[this.state.randNum].answer.replace(/\W/g, '').toLowerCase()){
            emojis.splice(this.state.randNum, 1);
            let randNum = Math.floor(Math.random() * emojis.length);
            // console.log('random num', Math.floor(Math.random() * emojis.length), 'array length', emojis.length)
            this.setState({
                score: this.state.score + 10,
                guess: '',
                gameMessage: emojis.length ? 'Nice Job!' : 'You Win!',
                randNum: randNum,
                youWin: !emojis.length
            })
        } else {
            this.setState({
                guess: '',
                gameMessage: 'Try Again!'
            })
        }
    }

    restartGame(){
        let restartedState = Object.assign({}, initialState); 
        restartedState.emojis = originalEmojis.slice();
        this.setState(restartedState);
    }

    render(){
        return (
            <Image style={styles.backgroundImage} source={require('../assets/globe.png')}>
            <View style={styles.container}>
                <Text style={{color: "#FFF", fontSize: 30, margin: 20, marginTop: 60}}>{this.state.gameMessage}</Text>
                <Text style={{color: "#000", fontSize: 20, margin: 15, marginTop: 50}}>SCORE:  
                    <Text style={{color: "#33FF55", fontWeight: "bold"}}>
                       {' ' + this.state.score}
                    </Text>
                </Text>
                {
                    this.state.emojis[this.state.randNum] ? 
                    (<View style={styles.gamePlay}>
                        <Text style={{color: "#FFF", fontSize: 25, marginBottom: 10}}>{this.state.emojis[this.state.randNum].question}</Text>
                        <TextInput
                            style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 5, textAlign: 'center'}}
                            onChangeText={(guess) => this.setState({guess})}
                            value={this.state.guess}
                            placeholder="Guess the Phrase!"
                        />
                        <Button
                            onPress={this.checkGuess}
                            title="Make Guess"
                            color="#841584"
                            disabled={this.state.youWin}
                        />
                    </View>)
                    : 
                    null
                }

                <View style={styles.gameManager}>
                    <Button style={{marginTop: 100}} onPress={this.restartGame} title="Restart Game">Restart Game</Button>
                    <Button style={{marginTop: 100}} onPress={() => Actions.pop() } title="Quit Game">Quit Game</Button>
                </View>
            </View>
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'rgba(185, 185, 185, .5)',

    //   color: 'white',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    gamePlay: {
        borderWidth: 2,
        alignItems: 'center',
        // justifyContent: 'center',
        margin: 5
    },
    gameManager: {
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginTop: 100
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
      }
  });
  