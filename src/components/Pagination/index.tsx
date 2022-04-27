import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  items: unknown[];
  step: number;
  currentIndex: number;
  onPress: (index: number) => void;
};

const Pagination: React.FC<Props> = props => {
  const numberOfPages = Math.ceil(props.items.length / props.step);
  const paginationItems = new Array(numberOfPages).fill(null);

  return (
    <View style={styles.container}>
      {paginationItems.map((item, index) => {
        const isActive = index === props.currentIndex;

        return (
          <TouchableOpacity key={index} onPress={() => props.onPress(index)}>
            <View style={[styles.cell, isActive && styles.activeCell]}>
              <Text>{index + 1}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  activeCell: {
    borderWidth: 1,
  },
});

export default Pagination;
