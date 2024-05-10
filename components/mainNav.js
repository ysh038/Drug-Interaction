import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

function MainNav(){

  const styles = StyleSheet.create({
    container: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      ...Platform.select({
        default: {
          backgroundColor: 'green',
        },
      }),
    },
  });

  return (
    <View style={styles.container}>
      <Text>main화면의 네비게이션 바 입니다. </Text>
    </View>
  );
}

export default MainNav;
