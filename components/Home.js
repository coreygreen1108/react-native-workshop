import React, {Component} from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text >🌎 Welcome to Emoji Planet 🌎</Text>
                <Button onPress={() => Actions.game() } title="Start Game">Start Game</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  