import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Search from '../../components/Search';
import List from '../../components/List';

import users from '../../store/users.json';

const Main = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Search />
        <List data={users} style={styles.list} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  list: {
    marginVertical: 16,
  },
});

export default Main;
