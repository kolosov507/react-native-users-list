import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Search from '../../components/Search';
import Sorting from '../../components/Sorting';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import { RootState } from '../../store';

const Main = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Search />
        <Sorting
          label="Sorting by age"
          values={['up', 'down']}
          onChange={value => console.log(value)}
          style={styles.sorting}
        />
        <List data={users} style={styles.list} />
        <Pagination
          items={users}
          step={15}
          currentIndex={1}
          onPress={page => console.log('page', page)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  sorting: {
    marginTop: 16,
  },
  list: {
    flex: 1,
    marginVertical: 16,
  },
});

export default Main;
