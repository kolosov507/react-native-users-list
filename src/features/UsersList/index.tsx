import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../../components/Search';
import Sorting from '../../components/Sorting';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import { Dispatch, RootState } from '../../store';
import { changePage, setSearchQuery } from './usersListSlice';

const UsersList = () => {
  const ITEMS_PER_PAGE = 15;

  const { users, currentPage, searchQuery } = useSelector((state: RootState) => state.usersList);

  const dispatch = useDispatch<Dispatch>();

  const searchResults = users.filter(user =>
    user.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()),
  );

  const begin = currentPage * ITEMS_PER_PAGE;
  const end = (currentPage + 1) * ITEMS_PER_PAGE;

  const listData = searchResults.slice(begin, end);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Search onChangeText={text => dispatch(setSearchQuery(text))} />
        <Sorting
          label="Sorting by age"
          values={['up', 'down']}
          onChange={value => console.log(value)}
          style={styles.sorting}
        />
        <List data={listData} style={styles.list} />
        <Pagination
          items={searchResults}
          step={ITEMS_PER_PAGE}
          currentIndex={currentPage}
          onPress={index => dispatch(changePage(index))}
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

export default UsersList;
