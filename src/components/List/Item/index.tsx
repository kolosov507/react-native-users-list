import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  name: string;
  age: number;
  avatar: string;
  style?: StyleProp<ViewStyle>;
};

const UserCard: React.FC<Props> = props => {
  return (
    <View style={[styles.wrapper, props.style]}>
      <Image style={styles.avatar} source={{ uri: props.avatar }} />
      <Text style={styles.text}>
        {props.name}
        {', '}
        {props.age}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
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
  text: {
    marginLeft: 16,
    fontSize: 18,
  },
});

export default UserCard;
