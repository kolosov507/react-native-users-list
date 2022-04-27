import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../../components/Search';
import Sorting from '../../components/Sorting';
import List from '../../components/UsersList';
import Pagination from '../../components/Pagination';
import { Dispatch, RootState } from '../../store';
import {
  changePage,
  removeUser,
  resetSorting,
  setSearchQuery,
  setSortingParameter,
  SortingParameters,
  User,
} from './usersListSlice';

const UsersList = () => {
  const USERS_PER_PAGE = 15;

  const dispatch = useDispatch<Dispatch>();
  const listRef = useRef<FlatList>(null);
  const { users, currentPage, searchQuery, sortingParameter } = useSelector(
    (state: RootState) => state.usersList,
  );

  const handleSearchQueryChanging = useCallback(
    (text: string) => dispatch(setSearchQuery(text)),
    [dispatch],
  );

  const handleRemovePress = useCallback((id: number) => dispatch(removeUser(id)), [dispatch]);

  const handlePageChanging = (index: number) => {
    dispatch(changePage(index));

    if (index !== currentPage) {
      listRef.current?.scrollToOffset({ offset: 0 });
    }
  };

  const sortByAge = (data: User[], parameter: SortingParameters | null) => {
    if (parameter === null) {
      return data;
    }

    const sorted = [...data].sort((a, b) => a.age - b.age);

    return parameter === SortingParameters.Down ? sorted.reverse() : sorted;
  };

  const searchByName = (data: User[], query: string) => {
    return data.filter(user => user.name.toLocaleLowerCase().includes(query.toLowerCase()));
  };

  const trimForPage = (data: User[], page: number, usersPerPage: number) => {
    const begin = page * usersPerPage;
    const end = (page + 1) * usersPerPage;

    return data.slice(begin, end);
  };

  const searchResults = searchByName(users, searchQuery);
  const sortingResults = sortByAge(searchResults, sortingParameter);
  const currentPageUsers = trimForPage(sortingResults, currentPage, USERS_PER_PAGE);

  useLayoutEffect(() => {
    const isNotEnoughUsersForCurrentPage = searchResults.length <= currentPage * USERS_PER_PAGE;

    if (isNotEnoughUsersForCurrentPage) {
      const previousPage = Math.max(currentPage - 1, 0);

      dispatch(changePage(previousPage));
    }
  }, [searchResults.length, currentPage, dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Search value={searchQuery} onChangeText={handleSearchQueryChanging} />
        <Sorting
          label="Sorting by age"
          values={Object.values(SortingParameters)}
          onChange={parameter => dispatch(setSortingParameter(parameter as SortingParameters))}
          onReset={() => dispatch(resetSorting())}
          style={styles.sorting}
        />
        <List
          ref={listRef}
          data={currentPageUsers}
          style={styles.list}
          onRemovePress={handleRemovePress}
        />
        <Pagination
          items={searchResults}
          step={USERS_PER_PAGE}
          currentIndex={currentPage}
          onPress={handlePageChanging}
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
