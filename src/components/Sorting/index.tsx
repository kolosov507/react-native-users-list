import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

type Props = {
  label: string;
  values: string[];
  onChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const Sorting: React.FC<Props> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Text>
        {props.label}
        {': '}
      </Text>
      {props.values.map(item => (
        <Text
          key={item}
          style={styles.value}
          onPress={() => props.onChange(item)}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  value: {
    marginHorizontal: 3,
    textDecorationLine: 'underline',
  },
});

export default Sorting;
