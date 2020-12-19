import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class CoinsScreen extends Component {
  handlePress = () => {
    this.props.navigation.navigate('CoinDetail');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Coins Screen</Text>
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
  titleText: {
    color: 'black',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
export default CoinsScreen;
