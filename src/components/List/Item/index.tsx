import React from 'react';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

type Props = {
  name: string;
  age: number;
  avatar: string;
  onRemovePress: () => void;
  style?: StyleProp<ViewStyle>;
};

const UserCard: React.FC<Props> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.info}>
        <Image style={styles.avatar} source={{ uri: props.avatar }} />
        <Text style={styles.text}>
          {props.name}
          {', '}
          {props.age}
        </Text>
      </View>
      <Text onPress={props.onRemovePress}>remove</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#F4F4F4',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 16,
    fontSize: 18,
  },
});

export default UserCard;
