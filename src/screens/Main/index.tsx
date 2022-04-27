import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Search from '../../components/Search';
import Sorting from '../../components/Sorting';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import { RootState } from '../../store';

const Main = () => {
  const ITEMS_PER_PAGE = 15;

  const users = useSelector((state: RootState) => state.users);
  const [pageIndex, setPageIndex] = useState(0);

  const begin = pageIndex * ITEMS_PER_PAGE;
  const end = (pageIndex + 1) * ITEMS_PER_PAGE;

  const listData = users.slice(begin, end);

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
        <List data={listData} style={styles.list} />
        <Pagination
          items={users}
          step={ITEMS_PER_PAGE}
          currentIndex={pageIndex}
          onPress={setPageIndex}
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
