import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Search from '../../components/Search';
import List from '../../components/List';
import Pagination from '../../components/Pagination';

import users from '../../store/users.json';

const Main = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Search />
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
    borderWidth: 1,
  },
  list: {
    marginVertical: 16,
  },
});

export default Main;
