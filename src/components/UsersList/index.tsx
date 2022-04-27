import React from 'react';
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Item from './UserCard';
import { User } from '../../features/UsersList/usersListSlice';

type Props = {
  data: User[];
  onRemovePress: (id: User['id']) => void;
  style?: StyleProp<ViewStyle>;
};

const UsersList: React.FC<Props> = props => {
  return (
    <FlatList
      style={props.style}
      data={props.data}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <Item
          id={item.id}
          key={item.id}
          age={item.age}
          avatar={item.avatar}
          name={item.name}
          onRemovePress={props.onRemovePress}
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

export default UsersList;
