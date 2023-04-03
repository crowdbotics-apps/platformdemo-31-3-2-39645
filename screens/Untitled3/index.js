import { useSelector } from "react-redux";
import { Text } from "react-native";
import { dogbreed2api_get_random_read } from "../../store/dogBreedAPI/dogbreed2api_response_get_Randoms.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  const {
    entities: dogbreed2api_response_get_Random
  } = useSelector(state => state.Dogbreed2api_response_get_Randoms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dogbreed2api_get_random_read());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Text style={styles.KrlFbItk}>Dog Message: {dogbreed2api_response_get_Random[0]?.message}</Text></View>
          
          
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  KrlFbItk: {
    width: 333,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled3;