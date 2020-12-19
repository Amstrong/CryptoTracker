import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';
const CoinsItem = ({item}) => {
  const getImageArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('cryptoTracker/src/assets/arrow_up.png');
    } else {
      return require('cryptoTracker/src/assets/arrow_down.png');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image style={styles.imgIcon} source={getImageArrow()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
    marginRight: Platform.OS === 'ios' ? 16 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 16,
  },
  percentText: {
    color: '#fff',
    marginRight: 8,
  },
  priceText: {
    color: '#fff',
    fontSize: 14,
  },
  imgIcon: {
    width: 22,
    height: 22,
  },
});
export default CoinsItem;
