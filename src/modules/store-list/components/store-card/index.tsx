import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import COLORS from '../../../../constants/color';
import STRINGS from '../../constants';
import styles from './styles';
import {StoreCardProps} from './types';

const StoreCard = (props: StoreCardProps) => {
  const {name, address, area, route, type, onStoreCardPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onStoreCardPress}>
      <View style={styles.card}>
        <Text style={styles.cardTextTitle}>{name}</Text>
        <View style={styles.spacerOne} />
        <Text style={styles.address}>{STRINGS.address}</Text>
        <Text style={styles.cardTextSubTitle}>{address}</Text>
        <View style={styles.spacerTwo} />
        <View style={styles.areaAndRoute}>
          <View style={styles.flex1}>
            <Text style={styles.address}>{STRINGS.area}</Text>
            <Text style={styles.cardTextSubTitle}>{area}</Text>
          </View>
          <View style={styles.flex1}>
            <Text style={styles.address}>{STRINGS.route}</Text>
            <Text style={styles.cardTextSubTitle}>{route}</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{type}</Text>
          </View>
        </View>
        <View style={styles.spacerTwo} />
        <View style={styles.spacerOne} />
        <Button buttonColor={COLORS.primaryGreen}>
          <Text style={styles.buttonText}>{STRINGS.visitStore}</Text>
        </Button>
      </View>
    </TouchableOpacity>
  );
};

export default StoreCard;
