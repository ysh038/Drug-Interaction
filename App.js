import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import { ScrollView } from 'react-native-web';
import axios from 'axios';

// SpringBoot 서버 url, 클라이언트에서 cors에러 해결 실패, SpringBoot에서 CrossOrigin 어노테이션 통해 해결
// android 에뮬레이터는 localhost말고 10.0.0.2로 해야함.
const url = 'http://10.0.2.2:8080';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // GET 요청 보내기
    async function testFunction() {
      await axios
        .get(url + '/test')
        .then(response => {
          // 성공적으로 데이터를 받았을 때 실행될 코드
          console.log(response.data);
          setData(response.data);
        })
        .catch(error => {
          // 에러 발생 시 실행될 코드
          console.error('Error fetching data:', error);
        });
    }
    testFunction();
  }, []); // 이펙트를 한 번만 실행하도록 빈 배열을 전달합니다.

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Hello world from React Naitve Web</Text>
      {data ? (
        <Text>{data}</Text>
      ) : (
        <Text>SpringBoot 서버와 연결에 실패했습니다.</Text>
      )}
    </View>
  );
}

export default App;
