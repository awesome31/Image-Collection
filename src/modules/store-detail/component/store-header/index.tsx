import {View} from 'react-native';
import {Text} from 'react-native-paper';
import STRINGS from '../../constants';
import styles from './styles';
import {StoreHeaderProps} from './types';

const StoreHeader = (props: StoreHeaderProps) => {
  const {name, address, area, route, type} = props;

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <View style={styles.details}>
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
      </View>
    </View>
  );
};

export default StoreHeader;
