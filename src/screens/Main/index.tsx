import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Search from '../../components/Search';

const Main = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Search />
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
});

export default Main;
