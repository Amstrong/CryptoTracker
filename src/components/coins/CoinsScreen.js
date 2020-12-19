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
import Colors from 'cryptoTracker/src/res/colors';
import CoinSearch from './coinSearch';
class CoinsScreen extends Component {
  state = {
    coins: [],
    allCoins: [],
    loading: false,
  };
  componentDidMount = () => {
    this.getCoins();
  };

  getCoins = async () => {
    this.setState({
      loading: true,
    });
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({
      coins: res.data,
      loading: false,
      allCoins: res.data,
    });
  };

  handlePress = (coin) => {
    this.props.navigation.navigate('CoinDetail', {coin});
  };

  handleSearch = (query) => {
    const {allCoins} = this.state;
    const coinsFilter = allCoins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    this.setState({coins: coinsFilter});
  };
  render() {
    const {coins, loading} = this.state;
    return (
      <View style={styles.container}>
        <CoinSearch onChange={this.handleSearch} />
        {loading ? (
          <ActivityIndicator color="fff" size="large" style={styles.loader} />
        ) : null}
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => this.handlePress(item)} />
          )}>
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
    backgroundColor: Colors.charade,
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
