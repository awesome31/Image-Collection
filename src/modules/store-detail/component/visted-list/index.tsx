import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import STRINGS from '../../constants';
import VisitedListCard from '../visited-list-card';
import styles from './styles';
import {VisitedListProps} from './types';

const VisitedList = (props: VisitedListProps) => {
  const {visitedData, onImagePress} = props;

  const renderItem = ({item}: {item: any}) => {
    return <VisitedListCard {...item} onImagePress={onImagePress} />;
  };

  const renderSeperator = () => <View style={styles.spacerOne} />;

  if (visitedData.length === 0) {
    return null;
  }

  return (
    <View style={styles.main}>
      <Text style={styles.visitedList}>{STRINGS.visitLists}</Text>
      <FlatList
        data={visitedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default VisitedList;
