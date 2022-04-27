import React from 'react';
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Item from './Item';
import { User } from '../../features/UsersList/usersListSlice';

type Props = {
  data: User[];
  onRemovePress: (user: User) => void;
  style?: StyleProp<ViewStyle>;
};

const List: React.FC<Props> = props => {
  return (
    <FlatList
      style={props.style}
      data={props.data}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <Item
          key={item.id}
          age={item.age}
          avatar={item.avatar}
          name={item.name}
          onRemovePress={() => props.onRemovePress(item)}
        />
      )}
    />
  );
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
  },
});

export default List;
