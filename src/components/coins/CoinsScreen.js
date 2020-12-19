import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Http from 'cryptoTracker/src/libs/http';
import CoinsItem from './CoinsItem';
class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: false,
  };
  componentDidMount = async () => {
    this.setState({
      loading: true,
    });
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({
      coins: res.data,
      loading: false,
    });
  };

  handlePress = () => {
    this.props.navigation.navigate('CoinDetail');
  };
  render() {
    const {coins, loading} = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator color="fff" size="large" style={styles.loader} />
        ) : null}
        <FlatList
          data={coins}
          renderItem={({item}) => <CoinsItem item={item} />}>
          {' '}
        </FlatList>
      </View>
    );

    //BOTON QUE PRESIONAS Y TE LLEVA A OTRA PANTALLA.
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.titleText}>Coins Screen</Text>
    //     <Pressable onPress={this.handlePress} style={styles.btn}>
    //       <Text style={styles.btnText}>Ir a detail </Text>
    //     </Pressable>
    //   </View>
    // );
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
  loader: {
    marginTop: 60,
  },
});
export default CoinsScreen;
