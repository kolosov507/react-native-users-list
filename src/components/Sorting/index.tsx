import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

type Props = {
  label: string;
  values: string[];
  onChange: (value: string) => void;
  onReset: () => void;
  style?: StyleProp<ViewStyle>;
};

const Sorting: React.FC<Props> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.container}>
        <Text>
          {props.label}
          {': '}
        </Text>
        {props.values.map(item => (
          <Text key={item} style={styles.value} onPress={() => props.onChange(item)}>
            {item}
          </Text>
        ))}
      </View>
      <Text style={styles.reset} onPress={props.onReset}>
        reset
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    marginHorizontal: 3,
    textDecorationLine: 'underline',
  },
  reset: {
    textDecorationLine: 'underline',
  },
});

export default Sorting;
