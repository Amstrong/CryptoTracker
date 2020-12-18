import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class CoinsScreen extends Component {
  handlePress = () => {
    console.log('Hola', this.props);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Coins Screen</Text>
        <Pressable onPress={this.handlePress} style={styles.btn}>
          <Text style={styles.btnText}>Ir a detail </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    fontSize: 50,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
export default CoinsScreen;
